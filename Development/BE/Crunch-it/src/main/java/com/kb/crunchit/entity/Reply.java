package com.kb.crunchit.entity;

import lombok.Getter;

@Getter
public class Reply {
    public int replyId;
    public int commentId;
    public int userId;
    public String content;
    public int likes;
    public String registerDate;
    public String modifyDate;
}
