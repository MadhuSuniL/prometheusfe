import { ReactTyped } from 'react-typed';

const PromptFooter = () => {
    // Get current year
    const currentYear = new Date().getFullYear();

    return (
        <div className="flex justify-evenly items-center text-main pt-1">
            <ReactTyped showCursor={false} typeSpeed={20} strings={["<div class='flex items-center'><p class='text-[13px]'>Powered by</p> <span class='ml-2 text-[12px] font-main text-main font-bold'> Madhu</span></div>"]} />
            <ReactTyped showCursor={false} typeSpeed={20} strings={[`<div><p class='text-[15px]'>&copy; ${currentYear} Prometheus. All rights reserved.</p></div>`]} />
        </div>
    );
};

export default PromptFooter;