'use client'; // Import this to use the client-side component. This enables us to use React Hooks like useState and useEffect.
import { Button } from '@/components/ui/button';
import { 
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuSeparator
} from '@radix-ui/react-dropdown-menu';
import { useTheme } from 'next-themes';
import { SunIcon, MoonIcon, SunMoon } from 'lucide-react';

const ThemeToggle = () => {
    const { theme, setTheme } = useTheme();
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant='ghost'>
                    { theme === 'system' ? (
                        <SunMoon />
                    ) : theme === 'dark' ? (
                        <MoonIcon />
                    ) : (
                        <SunIcon />
                    )}
            </Button>
        </DropdownMenuTrigger>
    </DropdownMenu>
  );
};
 
export default ThemeToggle;