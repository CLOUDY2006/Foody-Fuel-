import { Button } from "./ui/button";
import logo from "./imagefoodyfuel/foodyfuellogo.jpg";

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Header({ currentPage, onNavigate }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div 
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => onNavigate('home')}
          >
<div className="w-8 h-8 bg-white rounded-full flex items-center justify-center overflow-hidden ">
  <img 
    src= {logo}
    alt="Logo" 
    className="w-6 h-6 object-contain"
  />
</div>
            <span className="text-xl font-bold text-primary">Foody Fuel</span>
          </div>
          
          <nav className="flex items-center space-x-1">
            <Button
              variant={currentPage === 'home' ? 'default' : 'ghost'}
              onClick={() => onNavigate('home')}
              className="px-4"
            >
              Home
            </Button>
            <Button
              variant={currentPage === 'menu' ? 'default' : 'ghost'}
              onClick={() => onNavigate('menu')}
              className="px-4"
            >
              Menu
            </Button>
            <Button
              variant={currentPage === 'about' ? 'default' : 'ghost'}
              onClick={() => onNavigate('about')}
              className="px-4"
            >
              About
            </Button>
            <Button
              variant={currentPage === 'feedback' ? 'default' : 'ghost'}
              onClick={() => onNavigate('feedback')}
              className="px-4"
            >
              Feedback
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}