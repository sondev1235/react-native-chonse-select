# react-native-chonse-select
react native chonse select tab horizontal

#Install
	npm install --save react-native-chonse-select
	yarn add react-native-chonse-select

#Usage

	import { ChonseSelect } from 'react-native-chonse-select';

	const data = [
		{
			value:'0',
			label:'Male'
		},
		{
			value:'1',
			label:'Female'
		}
	]

	<ChonseSelect
		height={35}
		style={{ marginLeft: 20, marginBottom: 10 }}
		data={data}
		initValue={'0'}
		onPress={(item) => this.setState({ gender: item.value })}
	/>
