package cz.mazl.tul.service.user;

import cz.mazl.tul.bussines.dto.UserDTO;
import cz.mazl.tul.config.props.DefaultChatRoomProperties;
import cz.mazl.tul.dto.OnlineUser;
import cz.mazl.tul.entity.AuditEntity;
import cz.mazl.tul.entity.ChatRoomEntity;
import cz.mazl.tul.entity.UserEntity;
import cz.mazl.tul.repository.AuditRepository;
import cz.mazl.tul.repository.ChatroomRepository;
import cz.mazl.tul.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Service;

import java.util.*;
import java.util.stream.Collectors;

@Service
public class SimpleUserService implements UserService {

    private AuditRepository auditRepository;
    private UserRepository userRepository;
    private ChatroomRepository chatroomRepository;
    private DefaultChatRoomProperties defaultChatRoomProperties;
    private SimpMessagingTemplate messageSender;

    @Autowired
    public SimpleUserService(AuditRepository auditRepository, UserRepository userRepository,
                             ChatroomRepository chatroomRepository, DefaultChatRoomProperties defaultChatRoomProperties,
                             SimpMessagingTemplate messageSender) {
        this.auditRepository = auditRepository;
        this.userRepository = userRepository;
        this.chatroomRepository = chatroomRepository;
        this.defaultChatRoomProperties = defaultChatRoomProperties;
        this.messageSender = messageSender;
    }

    @Override
    public void createUser(UserDTO userDTO) {
        UserEntity userEntity = userRepository.findByUserId(userDTO.getUserId());
        if (userEntity != null) {
            updateUser(userDTO);
            return;
        }

        userEntity = new UserEntity();
        userEntity.setUserId(userDTO.getUserId());
        userEntity.setName(userDTO.getUserName());
        userEntity.setAvatarUrl(userDTO.getAvatar());

        ChatRoomEntity chatRoomEntity = chatroomRepository.findByChatRoomId(defaultChatRoomProperties.getRoomId());
        Set<ChatRoomEntity> chatRoomEntitySet = new HashSet<>();
        chatRoomEntitySet.add(chatRoomEntity);
        userEntity.setChatrooms(chatRoomEntitySet);
        userRepository.save(userEntity);
    }

    @Override
    public void updateUser(UserDTO userDTO) {
        UserEntity userEntity = userRepository.findByUserId(userDTO.getUserId());
        if (userEntity == null) {
            createUser(userDTO);
            return;
        }
        userEntity.setAvatarUrl(userDTO.getAvatar());
        userEntity.setName(userDTO.getUserName());

        userRepository.save(userEntity);
    }

    @Override
    public void auditUserLogin(String userId, String sessionId) {
        AuditEntity auditEntity = new AuditEntity();
        auditEntity.setUserId(userId);
        auditEntity.setSessionId(sessionId);
        auditEntity.setDate(new Date());
        auditRepository.save(auditEntity);
    }

    @Override
    public void logoutUserLogin(String userId, String sessionId) {
        auditRepository.deleteByUserIdAndSessionId(userId, sessionId);
    }

    @Override
    public void sendOnlineUserBrowcast() {
        List<AuditEntity> onlineUsers = auditRepository.findAll();
        List<String> userIds = onlineUsers.stream().map((e) -> {
            return e.getUserId();
        }).collect(Collectors.toList());
        List<UserEntity> userEntities = userRepository.findAllByUserIdIn(userIds);
        List<OnlineUser> onlineUsersToWebSocket = prepareOnlineUsers(userEntities);
        messageSender.convertAndSend("/topics/user/online", onlineUsersToWebSocket);
    }

    private List<OnlineUser> prepareOnlineUsers(List<UserEntity> userEntities) {
        List<OnlineUser> onlineUsers = new LinkedList<>();
        for(UserEntity userEntity: userEntities) {
            OnlineUser onlineUser = new OnlineUser();
            onlineUser.setAvatar(userEntity.getAvatarUrl());
            onlineUser.setUserId(userEntity.getUserId());
            onlineUser.setUserName(userEntity.getName());
            onlineUsers.add(onlineUser);
        }
        return onlineUsers;
    }
}
