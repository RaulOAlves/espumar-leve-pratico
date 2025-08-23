import espumarLogo from "@/assets/espumar-logo.png";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center">
          <div className="flex items-center space-x-3">
            <img 
              src={espumarLogo} 
              alt="EspuMar Lavanderia" 
              className="h-10 w-10 object-contain"
            />
            <div className="flex flex-col">
              <h1 className="text-xl font-bold text-primary">EspuMar</h1>
              <p className="text-xs text-muted-foreground">Lavanderia Self-Service</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;