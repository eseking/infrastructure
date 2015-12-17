package com.bsoft.baseframe.baseframe_dao;

import java.util.List;

import javax.annotation.Resource;

import org.apache.log4j.Logger;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import com.bsoft.baseframe.exception.DBException;
@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations = "classpath:spring/*applicationContext.xml")
public class BaseFrameDaoImplTest {
	private Logger logger = Logger.getLogger(BaseFrameDaoImplTest.class);
	/*private ApplicationContext factory;
	
	@Before
	public void init(){
		try {
			factory = new ClassPathXmlApplicationContext(   
				new String[]{"spring/applicationContext.xml","spring/dao_applicationContext.xml","spring/boneCP_applicationContext.xml"}); 

		} catch (Exception e) {
			e.printStackTrace();
		}
	
	}
	
	@Test
	public void testListEntityString() {
		BaseFrameDao baseDao =(BaseFrameDao)factory.getBean("baseFrameDao");
		
		try {
			baseDao.listEntity("BaseFrameUser.listAllUsers");
		} catch (DBException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}*/
	
	
	@Resource
	private BaseFrameDao baseFrameDao;
	
	@Test
	public void testListEntityString() {
		try {
		//	baseFrameDao.addEntity("BASEFRAMEUSER.addBaseFrameUser", user);
		List list =	baseFrameDao.listEntity("BASEFRAMEUSER.listAllUsers");
		logger.info("结果集大小为 "+list.size());
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}

}
