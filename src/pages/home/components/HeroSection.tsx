
import Button from '@/components/base/Button';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-700 via-slate-800 to-slate-900">
      {/* Background Image with Logo */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=NumberPlanet%20colorful%20rainbow%20planet%20logo%20with%20mathematical%20numbers%20orbiting%20around%20it%20on%20white%20background%2C%20centered%20composition%20with%20plenty%20of%20white%20space%20for%2016:9%20aspect%20ratio%2C%20vibrant%20colors%20matching%20the%20original%20logo%20design%2C%20educational%20math%20game%20branding%2C%20clean%20white%20background%20with%20subtle%20mathematical%20patterns&width=1920&height=1080&seq=hero-bg-logo&orientation=landscape')`,
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-16 h-16 bg-slate-400/20 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-8 h-8 bg-slate-300/30 rounded-full animate-bounce"></div>
        <div className="absolute bottom-32 left-1/4 w-12 h-12 bg-slate-400/10 rounded-full animate-ping"></div>
        <div className="absolute bottom-20 right-1/3 w-6 h-6 bg-slate-300/20 rounded-full animate-pulse"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Logo */}
          <div className="mb-8">
            <div className="inline-flex items-center justify-center mb-6">
              <div className="w-32 h-32 mb-4">
                <img 
                  src="https://static.readdy.ai/image/bf2347b25a01ac750e0256dc3ec9aa71/bdf00c7b1f7b9e752dcd2b90893c5345.png" 
                  alt="넘버플래닛 로고" 
                  className="w-full h-full object-contain drop-shadow-2xl"
                />
              </div>
            </div>
            <div className="text-center">
              <h1 className="text-white font-bold text-4xl drop-shadow-lg mb-2">넘버플래닛</h1>
              <p className="text-slate-300 text-xl font-medium">NumberPlanet</p>
            </div>
          </div>
          
          {/* Game Title */}
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            더하기의 왕
            <span className="block text-2xl md:text-3xl text-slate-300 font-normal mt-2">
              King of Addition
            </span>
          </h2>
          
          {/* Slogan */}
          <p className="text-xl md:text-2xl text-slate-200 mb-4 font-light">
            더하기로 세상을 연결하다
          </p>
          
          <p className="text-lg text-slate-200 mb-12 max-w-2xl mx-auto leading-relaxed">
            숫자를 한붓그리기로 연결하여 더하는 혁신적인 퍼즐 게임.<br/>
            재미있는 게임을 통해 수학적 사고력과 연산력을 자연스럽게 키워보세요.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="min-w-48 whitespace-nowrap bg-white text-slate-700 hover:bg-slate-50">
              <i className="ri-play-circle-fill text-xl"></i>
              지금 플레이하기
            </Button>
            <Button variant="outline" size="lg" className="min-w-48 whitespace-nowrap border-white text-white hover:bg-white hover:text-slate-700">
              <i className="ri-youtube-line text-xl"></i>
              게임 영상 보기
            </Button>
          </div>
          
          <div className="mt-12 flex justify-center gap-8 text-slate-300">
            <div className="text-center">
              <div className="text-2xl font-bold text-white">퍼즐</div>
              <div className="text-sm">게임 장르</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">한붓그리기</div>
              <div className="text-sm">게임 방식</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">수학 학습</div>
              <div className="text-sm">교육 효과</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
