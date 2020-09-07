package com.buguagaoshu.porntube.repository.impl;

import com.buguagaoshu.porntube.entity.FileTableEntity;
import com.buguagaoshu.porntube.enums.FileTypeEnum;
import com.buguagaoshu.porntube.repository.FileRepository;
import com.buguagaoshu.porntube.service.FileTableService;
import com.buguagaoshu.porntube.vo.VditorFiles;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * @author Pu Zhiwei {@literal puzhiweipuzhiwei@foxmail.com}
 * create          2020-09-06 14:24
 */
@Repository
@Slf4j
public class FileRepositoryInLocalDiskImpl implements FileRepository {

    private final Path location;

    private final FileTableService fileTableService;

    @Autowired
    public FileRepositoryInLocalDiskImpl(FileTableService fileTableService) throws IOException {
        this.location = Paths.get(FileTypeEnum.ROOT);
        this.fileTableService = fileTableService;
        if (Files.notExists(this.location)) {
            Files.createDirectories(this.location);
        }
    }


    @Override
    public VditorFiles vditorFileSave(MultipartFile[] files, Long userId) {
        VditorFiles vditorFiles = new VditorFiles();
        Map<String, Object> succMap = new HashMap<>(2);
        List<String> errFiles = new ArrayList<>();
        for (MultipartFile file : files) {
            String path = FileTypeEnum.filePath();
            String suffix = FileTypeEnum.getFileSuffix(file.getOriginalFilename());
            String filename = FileTypeEnum.newFilename(suffix);
            File dest = new File(path);
            if (!dest.exists() && !dest.mkdirs()) {
                errFiles.add(file.getOriginalFilename());
                continue;
            }
            try {

                Files.copy(file.getInputStream(), Paths.get(path, filename));
                FileTableEntity fileTableEntity = createFileTableEntity(filename, suffix, path, file.getSize(), file.getOriginalFilename(), userId);
                succMap.put(file.getOriginalFilename(), "/api/upload/" + path + "/" + filename);
                // TODO 文件夹大小控制
                fileTableService.save(fileTableEntity);
            } catch (Exception e) {
                errFiles.add(file.getOriginalFilename());
            }
        }

        Map<String, Object> data = new HashMap<>(2);
        vditorFiles.setCode(0);
        vditorFiles.setMsg("上传成功");
        data.put("succMap", succMap);
        data.put("errFiles", errFiles);
        vditorFiles.setData(data);
        return vditorFiles;
    }

    @Override
    public List<FileTableEntity> videoAndPhotoSave(MultipartFile[] files, int type, Long userId) throws FileNotFoundException {
        List<FileTableEntity> list = new ArrayList<>();
        for (MultipartFile file : files) {
            String path = FileTypeEnum.filePath();
            String suffix = FileTypeEnum.getFileSuffix(file.getOriginalFilename());
            String filename = FileTypeEnum.newFilename(suffix);
            File dest = new File(path);
            // 格式检查
            if (FileTypeEnum.getFileType(suffix).getCode() != type) {
                throw new FileNotFoundException("文件格式错误");

            }

            if (!dest.exists() && !dest.mkdirs()) {
                continue;
            }
            try {
                Files.copy(file.getInputStream(), Paths.get(path, filename));
                FileTableEntity fileTableEntity = createFileTableEntity(filename, suffix, path, file.getSize(), file.getOriginalFilename(), userId);
                // TODO 文件夹大小控制
                fileTableService.save(fileTableEntity);
                list.add(fileTableEntity);
            } catch (Exception e) {
                log.info("文件上传失败，上传文件的用户ID：{}， 上传的文件名： {}", userId, file.getOriginalFilename());
            }
        }
        return list;
    }


    @Override
    public Path load(String filePath) throws FileNotFoundException {
        Path path = location.resolve(filePath);
        if (Files.notExists(path)) {
            throw new FileNotFoundException("Cannot load file! File " + filePath + " not exists!");
        }
        return path;
    }


    public FileTableEntity createFileTableEntity(String filename, String suffix,
                                                 String path, long size,
                                                 String originalFilename,
                                                 long userId) {
        FileTableEntity fileTableEntity = new FileTableEntity();
        fileTableEntity.setUploadTime(System.currentTimeMillis());
        fileTableEntity.setFileUrl("/api/upload/" + path + "/" + filename);
        fileTableEntity.setFileNewName(filename);
        fileTableEntity.setSize(size);
        fileTableEntity.setFileOriginalName(originalFilename);

        fileTableEntity.setType(FileTypeEnum.getFileType(suffix).getCode());
        fileTableEntity.setSuffixName(suffix);
        fileTableEntity.setUploadUserId(userId);
        return fileTableEntity;
    }
}
