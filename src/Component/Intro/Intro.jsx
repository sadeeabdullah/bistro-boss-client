
import introImage from './Intro.css'
const Intro = () => {
    return (
        <div className='Intro-item bg-fixed p-24'>
            <img src={introImage} alt="" />
            <div className='flex flex-col justify-center items-center w-[85vw] mx-auto bg-base-200 p-8  '>
                <h3 className='font-sm text-3xl mb-4'>Bistro Boss</h3>
                <p className='text-center'>Bistro Boss Restaurant exudes a cozy and inviting ambiance, combining rustic charm with a modern twist. Renowned for its delectable fusion of flavors, the chef-curated menu at Bistro Boss showcases a culinary journey that captivates the palate. With impeccable service and a stylish setting, it has become a go-to spot for those seeking a delightful dining experience.</p>
            </div>
        </div>
    );
};

export default Intro;