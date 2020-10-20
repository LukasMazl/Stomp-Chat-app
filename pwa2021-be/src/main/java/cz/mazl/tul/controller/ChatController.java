package cz.mazl.tul.controller;

import cz.mazl.tul.dto.AuthorDto;
import cz.mazl.tul.dto.SendMessageDTO;
import cz.mazl.tul.dto.SimpleMessageDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.oauth2.core.oidc.user.OidcUser;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.Date;

import static cz.mazl.tul.constants.ApplicationConstant.API_PREFIX;

@RestController
public class ChatController {

    private SimpMessagingTemplate messageSender;

    @Autowired
    public ChatController(SimpMessagingTemplate simpMessagingTemplate) {
        this.messageSender = simpMessagingTemplate;
    }

    @PostMapping(API_PREFIX + "/send")
    public SimpleMessageDTO sendMessage(@AuthenticationPrincipal OidcUser principal,
                                        @RequestBody SendMessageDTO sendMessageDTO) {

        SimpleMessageDTO simpleMessageDTO = new SimpleMessageDTO();
        AuthorDto authorDto = new AuthorDto();
        authorDto.setAvatar(principal.getPicture());
        authorDto.setName(principal.getFullName());
        simpleMessageDTO.setAuthor(authorDto);
        simpleMessageDTO.setDate(new Date());
        simpleMessageDTO.setMessage(sendMessageDTO.getMessage());
        messageSender.convertAndSend("/topics/room/" + sendMessageDTO.getRoomId(), simpleMessageDTO);
        return null;
    }
}
