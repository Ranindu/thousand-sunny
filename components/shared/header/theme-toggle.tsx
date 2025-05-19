'use client'; // Import this to use the client-side component. This enables us to use React Hooks like useState and useEffect.

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button';
import { 
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuCheckboxItem
} from '@/components/ui/dropdown-menu';
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
                <Button 
                    variant='ghost' 
                    className='focus-visible:ring-0 focus-visible:ring-offset-0'
                  >
                    { theme === 'system' ? (
                        <SunMoon />
                    ) : theme === 'light' ? (
                        <SunIcon />
                    ) : (
                        <MoonIcon />
                    )}
            </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
            <DropdownMenuLabel>Appearance</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuCheckboxItem 
            checked={ theme === 'system'} 
            onClick={ () => setTheme ('system') }
            >
                System
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem 
            checked={ theme === 'dark'} 
            onClick={ () => setTheme ('dark') }
            >
                Dark
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem 
            checked={ theme === 'light'} 
            onClick={ () => setTheme ('light') }
            >
                Light
            </DropdownMenuCheckboxItem>                        
        </DropdownMenuContent>
    </DropdownMenu>
  );
};
 
export default ThemeToggle;