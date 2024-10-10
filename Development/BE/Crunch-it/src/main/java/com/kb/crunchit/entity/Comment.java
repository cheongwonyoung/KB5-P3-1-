package com.kb.crunchit.entity;

import lombok.Getter;

import java.util.List;

@Getter
public class Comment {
    public int commentId;
    public int boardId;
    public int userId;
    public String content;
    public int likes;
    public String registerDate;
    public String modifyDate;

    public List<Reply> replyList;

    public void addReplyList(List<Reply> replyList){
        this.replyList = replyList;
    }
}
