package com.bsoft.baseframe.entity.base;

import java.io.Serializable;
import java.util.List;

public class CommonTrees implements Serializable,Cloneable{
	
	 /** 
     * 主键
     */
    private String id;
 
    /** 
     * 叶子节点
     */
    private Boolean leaf;
 
    /** 
     * 排序号
     */
    private String OrderIndex;
 
    /** 
     * 显示名称
     */
    private String text;
 
    /** 
     * 父节点
     */
    private String Pid;
 
    /** 
     * 指标名称
     */
    private String info;
 
    /** 
     * 描述
     */
    private String DescInfo;
 
    /** 
     * 有效标记
     */
    private String DELFLG;
 
    /** 
     * 创建时间
     */
    private String CTB1;
 
    /** 
     * 创建者ID
     */
    private String CTB2;
 
    /** 
     * 更新时间
     */
    private String CTB3;
 
    /** 
     * 更新者ID
     */
    private String CTB4;
 
    /** 
     * 扩展1
     */
    private String EXT1;
 
    /** 
     * 扩展2
     */
    private String EXT2;
 
    /** 
     * 扩展3
     */
    private String EXT3;
    /**
     * 扩展4
     */
    private String EXT4;
    /**
     * 扩展5
     */
    private String EXT5;
    /**
     * 扩展6
     */
    private String EXT6;
    /**
     * 扩展7
     */
    private String EXT7;
    /**
     * 扩展8
     */
    private String EXT8;
    /**
     * 扩展9
     */
    private String EXT9;
    /**
     * 扩展10
     */
    private String EXT10;
    
    
   

	public String getEXT4() {
		return EXT4;
	}

	public void setEXT4(String eXT4) {
		EXT4 = eXT4;
	}

	public String getEXT5() {
		return EXT5;
	}

	public void setEXT5(String eXT5) {
		EXT5 = eXT5;
	}

	public String getEXT6() {
		return EXT6;
	}

	public void setEXT6(String eXT6) {
		EXT6 = eXT6;
	}

	public String getEXT7() {
		return EXT7;
	}

	public void setEXT7(String eXT7) {
		EXT7 = eXT7;
	}

	public String getEXT8() {
		return EXT8;
	}

	public void setEXT8(String eXT8) {
		EXT8 = eXT8;
	}

	public String getEXT9() {
		return EXT9;
	}

	public void setEXT9(String eXT9) {
		EXT9 = eXT9;
	}

	public String getEXT10() {
		return EXT10;
	}

	public void setEXT10(String eXT10) {
		EXT10 = eXT10;
	}

	private List children;
    public List getChildren() {
		return children;
	}

	public void setChildren(List children) {
		this.children = children;
	}

	/** 
     * 获取主键
     *
     * @return Id 主键
     */
    public String getId() {
        return this.id;
    }
 
 
 
    /** 
     * 获取排序号
     *
     * @return OrderIndex 排序号
     */
    public String getOrderIndex() {
        return this.OrderIndex;
    }
 
    /** 
     * 获取显示名称
     *
     * @return Text 显示名称
     */
    public String getText() {
        return this.text;
    }
 
    /** 
     * 获取父节点
     *
     * @return Pid 父节点
     */
    public String getPid() {
        return this.Pid;
    }
 
    /** 
     * 获取指标名称
     *
     * @return Info 指标名称
     */
    public String getInfo() {
        return this.info;
    }
 
    /** 
     * 获取描述
     *
     * @return DescInfo 描述
     */
    public String getDescInfo() {
        return this.DescInfo;
    }
 
    /** 
     * 获取有效标记
     *
     * @return DELFLG 有效标记
     */
    public String getDELFLG() {
        return this.DELFLG;
    }
 
    /** 
     * 获取创建时间
     *
     * @return CTB1 创建时间
     */
    public String getCTB1() {
        return this.CTB1;
    }
 
    /** 
     * 获取创建者ID
     *
     * @return CTB2 创建者ID
     */
    public String getCTB2() {
        return this.CTB2;
    }
 
    /** 
     * 获取更新时间
     *
     * @return CTB3 更新时间
     */
    public String getCTB3() {
        return this.CTB3;
    }
 
    /** 
     * 获取更新者ID
     *
     * @return CTB4 更新者ID
     */
    public String getCTB4() {
        return this.CTB4;
    }
 
    /** 
     * 获取扩展1
     *
     * @return EXT1 扩展1
     */
    public String getEXT1() {
        return this.EXT1;
    }
 
    /** 
     * 获取扩展2
     *
     * @return EXT2 扩展2
     */
    public String getEXT2() {
        return this.EXT2;
    }
 
    /** 
     * 获取扩展3
     *
     * @return EXT3 扩展3
     */
    public String getEXT3() {
        return this.EXT3;
    }
 
    /** 
     * 设置主键
     *
     * @param Id 主键
     */
    public void setId(String id) {
        this.id = id;
    }
 

 
    

	public Boolean getLeaf() {
		return leaf;
	}

	public void setLeaf(Boolean leaf) {
		this.leaf = leaf;
	}

	/** 
     * 设置排序号
     *
     * @param OrderIndex 排序号
     */
    public void setOrderIndex(String orderIndex) {
        this.OrderIndex = orderIndex;
    }
 
    /** 
     * 设置显示名称
     *
     * @param Text 显示名称
     */
    public void setText(String text) {
        this.text = text;
    }
 
    /** 
     * 设置父节点
     *
     * @param Pid 父节点
     */
    public void setPid(String pid) {
        this.Pid = pid;
    }
 
    /** 
     * 设置指标名称
     *
     * @param Info 指标名称
     */
    public void setInfo(String info) {
        this.info = info;
    }
 
    /** 
     * 设置描述
     *
     * @param DescInfo 描述
     */
    public void setDescInfo(String descInfo) {
        this.DescInfo = descInfo;
    }
 
    /** 
     * 设置有效标记
     *
     * @param DELFLG 有效标记
     */
    public void setDELFLG(String dELFLG) {
        this.DELFLG = dELFLG;
    }
 
    /** 
     * 设置创建时间
     *
     * @param CTB1 创建时间
     */
    public void setCTB1(String cTB1) {
        this.CTB1 = cTB1;
    }
 
    /** 
     * 设置创建者ID
     *
     * @param CTB2 创建者ID
     */
    public void setCTB2(String cTB2) {
        this.CTB2 = cTB2;
    }
 
    /** 
     * 设置更新时间
     *
     * @param CTB3 更新时间
     */
    public void setCTB3(String cTB3) {
        this.CTB3 = cTB3;
    }
 
    /** 
     * 设置更新者ID
     *
     * @param CTB4 更新者ID
     */
    public void setCTB4(String cTB4) {
        this.CTB4 = cTB4;
    }
 
    /** 
     * 设置扩展1
     *
     * @param EXT1 扩展1
     */
    public void setEXT1(String eXT1) {
        this.EXT1 = eXT1;
    }
 
    /** 
     * 设置扩展2
     *
     * @param EXT2 扩展2
     */
    public void setEXT2(String eXT2) {
        this.EXT2 = eXT2;
    }
 
    /** 
     * 设置扩展3
     *
     * @param EXT3 扩展3
     */
    public void setEXT3(String eXT3) {
        this.EXT3 = eXT3;
    }
    
    public Object clone(){

    	CommonTrees o = null;

        try{

        o = (CommonTrees)super.clone();

        }catch(CloneNotSupportedException e){

        e.printStackTrace();

        }

        return o;

        }

    
}
