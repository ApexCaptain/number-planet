
export default function GameIntroSection() {
  return (
    <section id="game-intro" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            게임 소개
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            "더하기의 왕"은 넘버플래닛의 첫 번째 시리즈로, 숫자 블록들을 연결하여 
            덧셈을 수행하는 혁신적인 퍼즐 게임입니다.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">게임 플레이 방식</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-slate-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">블록 연결</h4>
                    <p className="text-gray-600">화면에 나타난 숫자 블록들을 터치하여 연결하세요.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-slate-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">목표 달성</h4>
                    <p className="text-gray-600">연결한 숫자들의 합이 주어진 목표 숫자와 일치하도록 만드세요.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-slate-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">점수 획득</h4>
                    <p className="text-gray-600">정확하고 빠르게 문제를 해결할수록 더 높은 점수를 획득합니다.</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 p-4 bg-slate-50 rounded-lg">
                <p className="text-slate-700 font-medium">
                  <i className="ri-lightbulb-line mr-2"></i>
                  3개 이상의 숫자 블록을 연결하여 더욱 복잡하고 흥미로운 연산을 경험해보세요!
                </p>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="relative">
              <img 
                src="https://static.readdy.ai/image/bf2347b25a01ac750e0256dc3ec9aa71/a93d1b0cbff8ad35d81bc94a256f9d3e.jfif"
                alt="더하기의 왕 게임 스크린샷"
                className="w-full max-w-md mx-auto rounded-2xl shadow-2xl"
              />
              
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-slate-600 to-slate-700 text-white px-4 py-2 rounded-full font-bold shadow-lg animate-pulse">
                출시 예정!
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-xl shadow-lg">
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[1,2,3,4,5].map(i => (
                      <i key={i} className="ri-star-fill text-yellow-400"></i>
                    ))}
                  </div>
                  <span className="text-gray-600 font-medium">베타 테스터 평점</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-puzzle-line text-2xl text-slate-600"></i>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">블록 퍼즐 사고력</h4>
              <p className="text-gray-600">블록을 연결하며 시각적으로 문제를 해결하고 논리적 사고력을 기릅니다.</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-gamepad-line text-2xl text-blue-600"></i>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">재미있는 학습</h4>
              <p className="text-gray-600">게임을 통해 자연스럽게 수학을 학습하고 실력을 향상시킵니다.</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-trophy-line text-2xl text-indigo-600"></i>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">경쟁과 도전</h4>
              <p className="text-gray-600">높은 점수를 목표로 하는 랭킹 시스템으로 지속적인 동기를 부여합니다.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
