import oslo from '../assets/img/72 hours in Oslo, Norway.jfif';

//style BackGround in seperate .css file and style Button_nav in same file .jsx

export default function BackGround() {
	return (
		<div id='Welcome_web_page'>
			<div id='gray_background'>
				<img src={oslo} />
			</div>
		</div>
	);
}
