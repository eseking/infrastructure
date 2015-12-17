package com.bsoft.baseframe.baseframe_service;

import javax.annotation.Resource;

import org.apache.log4j.Logger;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import com.bsoft.baseframe.exception.BusinessException;
import com.bsoft.baseframe.utils.ApiResponse;
@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations = "classpath*:spring/*applicationContext.xml")
public class BaseFrameServiceImplTest {
	private Logger logger = Logger.getLogger(BaseFrameServiceImplTest.class);
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
	public void testListEntity() {
		BaseFrameService baseFrameService =(BaseFrameService)factory.getBean("baseFrameService");
		try {
			baseFrameService.listEntity("BaseFrameUser.listAllUsers");
		} catch (BusinessException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	*/
	
	 @Resource
	 private BaseFrameService baseFrameService;
	 
	 @Test
	 public void testListEntity() {
		 try {
				ApiResponse api =baseFrameService.listEntity("BASEFRAMEUSER.listAllUsers");
				logger.info("结果集大小为 "+api.getPageModel().getDatas().size());
			} catch (BusinessException e) {
				e.printStackTrace();
			}
	 }

}
