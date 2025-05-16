'use client'; // Import this to use the client-side component. This enables us to use React Hooks like useState and useEffect.

import { useState, useEffect } from 'react'
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
    const [mounted, setMounted] = useState(false) //Not mounted by default.
    const { theme, setTheme } = useTheme();
    
    useEffect(() => {
        setMounted(true);
    }, []);
    
    if (!mounted) {
        return null
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant='ghost'>
                    { theme === 'system' ? (
                        <SunMoon />
                    ) : theme === 'light' ? (
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