package config;

import com.jfinal.config.*;
import com.jfinal.core.JFinal;

import d3Frame.D3Controller;
import demo.HelloController;

public class MyConfig extends JFinalConfig{

	@Override
	public void configConstant(Constants me) {
		// TODO Auto-generated method stub
		me.setDevMode(true);
	}

	@Override
	public void configHandler(Handlers arg0) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void configInterceptor(Interceptors arg0) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void configPlugin(Plugins arg0) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void configRoute(Routes me) {
		// TODO Auto-generated method stub
		me.add("/hello",demo.HelloController.class);
		me.add("/d3Frame",D3Controller.class,"/d3Frame");
	}

	public static void main(String[] args) {
		JFinal.start("webapp", 8080, "/", 5);
	}
	
}
