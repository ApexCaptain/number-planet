
export default function TeamSection() {
  const teamMembers = [
    {
      role: '개발자',
      name: '김개발',
      description: '모바일 게임 개발 5년 경력, Unity & React Native 전문가',
      icon: 'ri-code-s-slash-line',
      skills: ['Unity', 'C#', 'React Native', 'Game Logic']
    },
    {
      role: '기획자',
      name: '박기획',
      description: '교육 게임 기획 전문가, 아동 심리학 석사 학위 보유',
      icon: 'ri-lightbulb-line',
      skills: ['Game Design', 'Education', 'UX Planning', 'Psychology']
    },
    {
      role: '2D 디자이너',
      name: '이디자인',
      description: '게임 UI/UX 및 캐릭터 디자인 전문, 다수 모바일 게임 참여',
      icon: 'ri-palette-line',
      skills: ['UI/UX Design', 'Character Design', 'Illustration', 'Animation']
    }
  ];

  return (
    <section id="team" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            제작팀 소개
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            교육과 게임의 완벽한 조화를 추구하는 넘버플래닛 팀을 만나보세요.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <div className="bg-white p-8 rounded-2xl shadow-xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full flex items-center justify-center">
                  <span className="text-gray-900 font-bold text-2xl">NP</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">넘버플래닛</h3>
                  <p className="text-emerald-600 font-medium">NumberPlanet Game Studio</p>
                </div>
              </div>
              
              <p className="text-gray-600 leading-relaxed mb-6">
                넘버플래닛은 교육과 엔터테인먼트의 경계를 허무는 혁신적인 게임을 만드는 인디 게임 스튜디오입니다. 
                사칙연산을 각기 다른 게임으로 구현하여 학습자들이 수학을 더욱 재미있게 접근할 수 있도록 돕고 있습니다.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <i className="ri-target-line text-emerald-600"></i>
                  <span className="text-gray-700">교육용 게임의 새로운 패러다임 제시</span>
                </div>
                <div className="flex items-center gap-3">
                  <i className="ri-rocket-line text-emerald-600"></i>
                  <span className="text-gray-700">인디 스튜디오에서 게임 회사로 도약 계획</span>
                </div>
                <div className="flex items-center gap-3">
                  <i className="ri-global-line text-emerald-600"></i>
                  <span className="text-gray-700">글로벌 교육 게임 시장 진출 목표</span>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <img 
              src="https://readdy.ai/api/search-image?query=Modern%20indie%20game%20development%20team%20working%20together%20in%20a%20bright%20office%20space%2C%20three%20professionals%20collaborating%20on%20mobile%20game%20development%2C%20developer%20programmer%20designer%20working%20on%20computers%2C%20creative%20workspace%20with%20game%20development%20tools%2C%20teamwork%20collaboration%20scene%2C%20professional%20game%20studio%20environment%2C%20modern%20tech%20office%20interior&width=600&height=400&seq=team-photo&orientation=landscape"
              alt="넘버플래닛 팀 작업 모습"
              className="w-full rounded-2xl shadow-xl"
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-emerald-100 to-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className={`${member.icon} text-3xl text-emerald-600`}></i>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h4>
                <p className="text-emerald-600 font-medium">{member.role}</p>
              </div>
              
              <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                {member.description}
              </p>
              
              <div>
                <h5 className="font-semibold text-gray-900 mb-3">전문 분야</h5>
                <div className="flex flex-wrap gap-2">
                  {member.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className="px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-medium rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-emerald-500 to-cyan-500 text-white p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-4">함께 성장하는 팀</h3>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              우리는 각자의 전문성을 바탕으로 서로 협력하며, 
              더 나은 교육용 게임을 만들기 위해 끊임없이 노력하고 있습니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
