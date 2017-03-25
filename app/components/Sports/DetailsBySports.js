import React, { Component } from 'react';
import { View, Text, ScrollView, Dimensions, TouchableWithoutFeedback, Platform } from 'react-native';

const { width, height } = Dimensions.get('window');
const topNotificationAreaHeight = Platform.OS === 'ios' ? 20 : 0;

export default class DetailsBySports extends Component {
  constructor(props) {
    super(props);
    this.close = this.close.bind(this);
  }

  close() {
    const { navigator } = this.props;
      var routes = navigator.getCurrentRoutes();
      routes.pop();
      navigator.immediatelyResetRouteStack(routes);
  }

  render() {
  	const { data } = this.props;
  	return (
      <View style={{ height, width, backgroundColor: 'white', position: 'absolute', top: topNotificationAreaHeight }}> 
           
             <ScrollView
			          ref={(scrollView) => { _scrollView = scrollView; }}
			          automaticallyAdjustContentInsets={false}
			          horizontal={false}>
			  <View > 
	            <View style={{width, height: height / 3}}>
		            <Text>Page1</Text>
		            <TouchableWithoutFeedback onPress={() => this.close()}>
		                <View><Text>Close</Text></View>
		            </TouchableWithoutFeedback>
		        </View>
		        <View>
		            <Text>Page2</Text>
		            
			        
			           <View style={{height: height / 3, width: width, backgroundColor: 'red'}}>
                          <ScrollView
					          //ref={(scrollView) => { _scrollView = scrollView; }}
					          automaticallyAdjustContentInsets={false}
					          horizontal={true}>
					             <View style={{height: height / 3, width: width, backgroundColor: 'grey'}}></View>
			                     <View style={{height: height / 3, width: width, backgroundColor: 'lightblue'}}></View>
			                     <View style={{height: height / 3, width: width, backgroundColor: 'white'}}></View>
					      </ScrollView>    
			           </View>
			           <View style={{height: height / 3, width: width, backgroundColor: 'grey'}}>
                           <ScrollView
					          //ref={(scrollView) => { _scrollView = scrollView; }}
					          automaticallyAdjustContentInsets={false}
					          horizontal={true}>
					             <View style={{height: height / 3, width: width, backgroundColor: 'lightblue'}}></View>
					             <View style={{height: height / 3, width: width, backgroundColor: 'grey'}}></View>
			                     
			                     <View style={{height: height / 3, width: width, backgroundColor: 'white'}}></View>
					      </ScrollView> 
			           </View>
			           <View style={{height: height / 3, width: width, backgroundColor: 'lightblue'}}>
                            <ScrollView
					          //ref={(scrollView) => { _scrollView = scrollView; }}
					          automaticallyAdjustContentInsets={false}
					          horizontal={true}>
					             <View style={{height: height / 3, width: width, backgroundColor: 'white'}}></View>
					             <View style={{height: height / 3, width: width, backgroundColor: 'lightblue'}}></View>
					             <View style={{height: height / 3, width: width, backgroundColor: 'grey'}}></View>			                  			                    
					        </ScrollView> 
			           </View>
			        
		        </View>
		           </View>
		        </ScrollView>
	     

      </View>
  	);
  }
}