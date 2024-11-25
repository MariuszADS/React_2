import oslo from '../assets/img/72 hours in Oslo, Norway.jfif';

//style BackGround in seperate .css file and style Button_nav in same file .jsx

export default function BackGround() {
	return (
		<div id='BackGround'>
			<img src={oslo} />
			<div className='BackGround_grey' />
		</div>
	);
}
