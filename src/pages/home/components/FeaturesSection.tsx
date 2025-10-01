export default function FeaturesSection() {
  const features = [
    {
      icon: 'ri-pencil-line',
      title: '직관적인 한붓그리기',
      description: '손가락으로 숫자를 연결하는 간단하고 직관적인 조작 방식',
      color: 'emerald',
    },
    {
      icon: 'ri-calculator-line',
      title: '3개 이상 숫자 활용',
      description: '복잡한 연산을 통해 더욱 도전적인 퍼즐 해결 경험',
      color: 'teal',
    },
    {
      icon: 'ri-bar-chart-line',
      title: '점수 경쟁 시스템',
      description: '친구들과 점수를 비교하며 더 높은 기록에 도전',
      color: 'purple',
    },
    {
      icon: 'ri-loop-left-line',
      title: '순환 학습 구조',
      description: '게임과 학습이 자연스럽게 연결된 장기적 플레이 유도',
      color: 'cyan',
    },
    {
      icon: 'ri-time-line',
      title: '실시간 피드백',
      description: '즉각적인 결과 확인으로 빠른 학습 효과 달성',
      color: 'orange',
    },
    {
      icon: 'ri-trophy-line',
      title: '레벨 시스템',
      description: '단계별 난이도 조절로 지속적인 성장과 재미 제공',
      color: 'red',
    },
  ];

  // 미사용 경고 제거를 위해 참조
  void features;

  return (
    <section
      id="features"
      className="py-20 bg-gradient-to-br from-slate-50 to-slate-100"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            핵심 특징
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            더하기의 왕이 제공하는 혁신적인 학습 경험과 게임의 주요 특징들을
            확인해보세요.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center mb-6">
              <i className="ri-puzzle-2-line text-3xl text-slate-600"></i>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              직관적인 플레이
            </h3>
            <p className="text-gray-600 leading-relaxed">
              복잡한 조작 없이 터치 한 번으로 숫자 블록을 연결하는 간단하고
              직관적인 게임 방식을 제공합니다.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
              <i className="ri-brain-line text-3xl text-blue-600"></i>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              수학적 사고력 향상
            </h3>
            <p className="text-gray-600 leading-relaxed">
              게임을 통해 자연스럽게 덧셈 연산 능력과 논리적 사고력을 기를 수
              있도록 설계되었습니다.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-indigo-100 rounded-2xl flex items-center justify-center mb-6">
              <i className="ri-line-chart-line text-3xl text-indigo-600"></i>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              점진적 난이도 증가
            </h3>
            <p className="text-gray-600 leading-relaxed">
              쉬운 단계부터 시작해서 점차 어려워지는 단계별 학습으로 꾸준한 실력
              향상을 도모합니다.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center mb-6">
              <i className="ri-trophy-line text-3xl text-slate-600"></i>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              성취감 시스템
            </h3>
            <p className="text-gray-600 leading-relaxed">
              랭킹과 업적 시스템을 통해 지속적인 동기 부여와 성취감을 제공하여
              학습 의욕을 높입니다.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
              <i className="ri-refresh-line text-3xl text-blue-600"></i>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              무한 반복 학습
            </h3>
            <p className="text-gray-600 leading-relaxed">
              다양한 문제 패턴으로 언제든지 새로운 도전을 즐길 수 있어 지루함
              없는 학습이 가능합니다.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-indigo-100 rounded-2xl flex items-center justify-center mb-6">
              <i className="ri-smartphone-line text-3xl text-indigo-600"></i>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              모바일 최적화
            </h3>
            <p className="text-gray-600 leading-relaxed">
              스마트폰과 태블릿에서 최적화된 UI/UX로 언제 어디서나 편리하게
              게임을 즐길 수 있습니다.
            </p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-slate-600 to-slate-700 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              교육과 게임의 완벽한 조화
            </h3>
            <p className="text-slate-200 max-w-2xl mx-auto leading-relaxed">
              지루한 수학 공부가 아닌, 재미있는 게임을 통해 자연스럽게 수학
              실력을 키워보세요. 더하기의 왕과 함께라면 수학이 더 이상 어려운
              과목이 아닙니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
