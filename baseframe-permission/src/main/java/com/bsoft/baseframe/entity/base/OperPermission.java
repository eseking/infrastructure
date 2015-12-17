package com.bsoft.baseframe.entity.base;

import java.io.Serializable;

public class OperPermission implements Serializable{
	private String id;
    private String roleId;
    private String permissionType;
    private String ctb1;
    public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getRoleId() {
		return roleId;
	}
	public void setRoleId(String roleId) {
		this.roleId = roleId;
	}
	public String getPermissionType() {
		return permissionType;
	}
	public void setPermissionType(String permissionType) {
		this.permissionType = permissionType;
	}
	public String getCtb1() {
		return ctb1;
	}
	public void setCtb1(String ctb1) {
		this.ctb1 = ctb1;
	}
	public String getCtb2() {
		return ctb2;
	}
	public void setCtb2(String ctb2) {
		this.ctb2 = ctb2;
	}
	public String getCtb3() {
		return ctb3;
	}
	public void setCtb3(String ctb3) {
		this.ctb3 = ctb3;
	}
	public String getCtb4() {
		return ctb4;
	}
	public void setCtb4(String ctb4) {
		this.ctb4 = ctb4;
	}
	public String getExt1() {
		return ext1;
	}
	public void setExt1(String ext1) {
		this.ext1 = ext1;
	}
	public String getExt2() {
		return ext2;
	}
	public void setExt2(String ext2) {
		this.ext2 = ext2;
	}
	public String getExt3() {
		return ext3;
	}
	public void setExt3(String ext3) {
		this.ext3 = ext3;
	}
	private String ctb2;
    private String ctb3;
    private String ctb4;
    private String ext1;
    private String ext2;
    private String ext3;
}
