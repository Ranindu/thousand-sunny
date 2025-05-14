import { APP_NAME } from '@/lib/constants';

const Footer = () => {
    const currentYear = new Date().getFullYear(); // Get the current year
    return (<footer className='border-t'>
    <div className="p-5 flex-center">
        {currentYear} {APP_NAME}. All rights reserved.
    </div>
</footer>);    
}
 
export default Footer;