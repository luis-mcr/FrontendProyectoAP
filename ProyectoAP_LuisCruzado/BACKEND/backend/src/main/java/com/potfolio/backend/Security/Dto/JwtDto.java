/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.potfolio.backend.Security.Dto;

import java.util.Collection;
import org.springframework.security.core.GrantedAuthority;

/**
 *
 * @author lumic
 */
public class JwtDto {
    private String token;
    private String bearer = "Bearer";
    private String nombreUsusario;
    private Collection<? extends GrantedAuthority> authorities;
    
    //Constructor

    public JwtDto(String token, String nombreUsusario, Collection<? extends GrantedAuthority> authorities) {
        this.token = token;
        this.nombreUsusario = nombreUsusario;
        this.authorities = authorities;
    }
    
    //Getters and Setters

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    public String getBearer() {
        return bearer;
    }

    public void setBearer(String bearer) {
        this.bearer = bearer;
    }

    public String getNombreUsusario() {
        return nombreUsusario;
    }

    public void setNombreUsusario(String nombreUsusario) {
        this.nombreUsusario = nombreUsusario;
    }

    public Collection<? extends GrantedAuthority> getAuthorities() {
        return authorities;
    }

    public void setAuthorities(Collection<? extends GrantedAuthority> authorities) {
        this.authorities = authorities;
    }
    
    
}
