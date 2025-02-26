// import oslo from '../assets/img/72 hours in Oslo, Norway.jfif';
// import oslo from '../assets/img/front_img/DSC_0097.JPG'; //5/10
// import oslo from '../assets/img/front_img/DSC_0073.JPG'; //5/10
// import oslo from '../assets/img/front_img/DSC_0084.JPG'; //6/10
// import oslo from '../assets/img/front_img/DSC_0102.JPG'; //8/10
import oslo from '../assets/img/front_img/DSC_0140.JPG'; //8/10

//style BackGround in seperate .css file and style Button_nav in same file .jsx

export default function BackGround() {
	return (
		<div id='BackGround'>
			<img src={oslo} />
			<div className='BackGround_grey' />
		</div>
	);
}
