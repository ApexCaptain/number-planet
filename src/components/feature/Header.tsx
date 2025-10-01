
export default function Header() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-800/95 backdrop-blur-sm border-b border-slate-700">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 flex items-center justify-center">
              <img 
                src="https://static.readdy.ai/image/bf2347b25a01ac750e0256dc3ec9aa71/bdf00c7b1f7b9e752dcd2b90893c5345.png" 
                alt="넘버플래닛 로고" 
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <h1 className="text-white font-bold text-xl">넘버플래닛</h1>
              <p className="text-slate-300 text-sm">NumberPlanet</p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => scrollToSection('game-intro')}
              className="text-slate-300 hover:text-white transition-colors cursor-pointer"
            >
              게임소개
            </button>
            <button 
              onClick={() => scrollToSection('features')}
              className="text-slate-300 hover:text-white transition-colors cursor-pointer"
            >
              특징
            </button>
            <button 
              onClick={() => scrollToSection('team')}
              className="text-slate-300 hover:text-white transition-colors cursor-pointer"
            >
              팀소개
            </button>
            <button 
              onClick={() => scrollToSection('roadmap')}
              className="text-slate-300 hover:text-white transition-colors cursor-pointer"
            >
              로드맵
            </button>
          </nav>

          <div className="md:hidden">
            <button className="text-slate-300 hover:text-white transition-colors">
              <i className="ri-menu-line text-2xl"></i>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
