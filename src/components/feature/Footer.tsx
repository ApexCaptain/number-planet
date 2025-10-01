
export default function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 flex items-center justify-center">
                <img 
                  src="https://static.readdy.ai/image/bf2347b25a01ac750e0256dc3ec9aa71/bdf00c7b1f7b9e752dcd2b90893c5345.png" 
                  alt="넘버플래닛 로고" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="text-white font-bold text-xl">넘버플래닛</h3>
                <p className="text-slate-400 text-sm">NumberPlanet Game Studio</p>
              </div>
            </div>
            <p className="text-slate-400 mb-6 max-w-md">
              사칙연산을 게임으로 구현한 학습형 게임 플랫폼을 개발하는 인디 게임 스튜디오입니다.
            </p>
            <div className="flex gap-4">
              <button className="w-10 h-10 bg-slate-800 hover:bg-slate-600 rounded-full flex items-center justify-center transition-colors cursor-pointer">
                <i className="ri-youtube-fill text-white"></i>
              </button>
              <button className="w-10 h-10 bg-slate-800 hover:bg-slate-600 rounded-full flex items-center justify-center transition-colors cursor-pointer">
                <i className="ri-instagram-line text-white"></i>
              </button>
              <button className="w-10 h-10 bg-slate-800 hover:bg-slate-600 rounded-full flex items-center justify-center transition-colors cursor-pointer">
                <i className="ri-twitter-x-line text-white"></i>
              </button>
              <button className="w-10 h-10 bg-slate-800 hover:bg-slate-600 rounded-full flex items-center justify-center transition-colors cursor-pointer">
                <i className="ri-discord-fill text-white"></i>
              </button>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">게임</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-slate-400 hover:text-slate-300 transition-colors">더하기의 왕</a></li>
              <li><a href="#" className="text-slate-400 hover:text-slate-300 transition-colors">빼기의 왕 (예정)</a></li>
              <li><a href="#" className="text-slate-400 hover:text-slate-300 transition-colors">곱하기의 왕 (예정)</a></li>
              <li><a href="#" className="text-slate-400 hover:text-slate-300 transition-colors">나누기의 왕 (예정)</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">빠른 링크</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-slate-400 hover:text-slate-300 transition-colors">다운로드</a></li>
              <li><a href="#" className="text-slate-400 hover:text-slate-300 transition-colors">게임 가이드</a></li>
              <li><a href="#" className="text-slate-400 hover:text-slate-300 transition-colors">고객지원</a></li>
              <li><a href="https://readdy.ai/?origin=logo" className="text-slate-400 hover:text-slate-300 transition-colors">Made with Readdy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-500 text-sm">
            © 2024 넘버플래닛 게임 스튜디오. All rights reserved.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="text-slate-500 hover:text-slate-400 text-sm transition-colors">개인정보처리방침</a>
            <a href="#" className="text-slate-500 hover:text-slate-400 text-sm transition-colors">이용약관</a>
            <a href="#" className="text-slate-500 hover:text-slate-400 text-sm transition-colors">문의하기</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
