
export default function RoadmapSection() {
  const roadmapItems = [
    {
      phase: 'Phase 1',
      title: '더하기의 왕',
      status: 'current',
      date: '2024년 Q4',
      description: '한붓그리기로 숫자를 연결하여 덧셈을 수행하는 퍼즐 게임',
      features: ['기본 덧셈 연산', '레벨 시스템', '점수 경쟁', '튜토리얼'],
      icon: 'ri-add-line'
    },
    {
      phase: 'Phase 2',
      title: '빼기의 왕',
      status: 'upcoming',
      date: '2025년 Q1',
      description: '전략적 사고가 필요한 뺄셈 기반의 퍼즐 게임',
      features: ['뺄셈 연산', '전략 모드', '타임어택', '멀티플레이어'],
      icon: 'ri-subtract-line'
    },
    {
      phase: 'Phase 3',
      title: '곱하기의 왕',
      status: 'planned',
      date: '2025년 Q2',
      description: '복잡한 계산력을 기르는 곱셈 중심의 고급 퍼즐',
      features: ['곱셈 연산', '보스 스테이지', '길드 시스템', '월드 챔피언십'],
      icon: 'ri-close-line'
    },
    {
      phase: 'Phase 4',
      title: '나누기의 왕',
      status: 'planned',
      date: '2025년 Q3',
      description: '정확성과 논리력이 핵심인 나눗셈 마스터 게임',
      features: ['나눗셈 연산', '랭킹 시스템', 'AI 대전', '커스텀 모드'],
      icon: 'ri-divide-line'
    }
  ];

  const getStatusInfo = (status: string) => {
    switch (status) {
      case 'current':
        return {
          badge: '개발 중',
          badgeColor: 'bg-emerald-500 text-white',
          cardColor: 'bg-gradient-to-br from-emerald-50 to-cyan-50 border-emerald-200'
        };
      case 'upcoming':
        return {
          badge: '곧 출시',
          badgeColor: 'bg-blue-500 text-white',
          cardColor: 'bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200'
        };
      case 'planned':
        return {
          badge: '계획됨',
          badgeColor: 'bg-gray-500 text-white',
          cardColor: 'bg-gray-50 border-gray-200'
        };
      default:
        return {
          badge: '',
          badgeColor: '',
          cardColor: 'bg-white border-gray-200'
        };
    }
  };

  return (
    <section id="roadmap" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            미래 로드맵
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            넘버플래닛의 사칙연산 게임 시리즈 개발 계획을 확인하세요. 
            각 연산별로 특화된 게임으로 완성도 높은 학습 플랫폼을 구축해나갑니다.
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-emerald-400 to-gray-300 rounded-full"></div>
          
          <div className="space-y-12">
            {roadmapItems.map((item, index) => {
              const statusInfo = getStatusInfo(item.status);
              const isEven = index % 2 === 0;
              
              return (
                <div key={index} className={`flex flex-col lg:flex-row items-center gap-8 ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                  {/* Timeline Node */}
                  <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-16 h-16 bg-white rounded-full border-4 border-emerald-400 flex items-center justify-center shadow-lg z-10">
                    <i className={`${item.icon} text-3xl text-emerald-600`}></i>
                  </div>
                  
                  {/* Content Card */}
                  <div className={`w-full lg:w-5/12 ${isEven ? 'lg:text-right' : 'lg:text-left'}`}>
                    <div className={`${statusInfo.cardColor} border-2 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300`}>
                      {/* Header */}
                      <div className={`flex items-center gap-3 mb-4 ${isEven ? 'lg:justify-end' : 'lg:justify-start'} justify-start`}>
                        <div className="lg:hidden w-12 h-12 bg-white rounded-full border-4 border-emerald-400 flex items-center justify-center">
                          <i className={`${item.icon} text-2xl text-emerald-600`}></i>
                        </div>
                        <div>
                          <span className={`inline-block px-3 py-1 ${statusInfo.badgeColor} text-sm font-medium rounded-full mb-2`}>
                            {statusInfo.badge}
                          </span>
                          <h3 className="text-2xl font-bold text-gray-900">{item.title}</h3>
                          <p className="text-emerald-600 font-medium">{item.phase} • {item.date}</p>
                        </div>
                      </div>
                      
                      {/* Description */}
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {item.description}
                      </p>
                      
                      {/* Features */}
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">주요 기능</h4>
                        <div className={`flex flex-wrap gap-2 ${isEven ? 'lg:justify-end' : 'lg:justify-start'} justify-start`}>
                          {item.features.map((feature, featureIndex) => (
                            <span 
                              key={featureIndex}
                              className="px-3 py-1 bg-white text-gray-700 text-sm font-medium rounded-lg border"
                            >
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Spacer for the other side */}
                  <div className="hidden lg:block w-5/12"></div>
                </div>
              );
            })}
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-gray-900 to-blue-900 text-white p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-4">완성된 사칙연산 플랫폼</h3>
            <p className="text-lg opacity-90 max-w-3xl mx-auto mb-6">
              모든 시리즈가 완성되면, 사칙연산을 종합적으로 학습할 수 있는 
              통합 플랫폼을 제공하여 더욱 체계적인 수학 학습이 가능해집니다.
            </p>
            <div className="flex justify-center gap-4 text-sm">
              <span className="px-4 py-2 bg-white/20 rounded-full">종합 성취도 시스템</span>
              <span className="px-4 py-2 bg-white/20 rounded-full">크로스 게임 랭킹</span>
              <span className="px-4 py-2 bg-white/20 rounded-full">통합 리워드</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
