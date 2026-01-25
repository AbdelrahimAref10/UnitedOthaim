import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Sector } from '../../../core/models/sector.model';

export interface Project {
  id: string;
  title: string;
  titleAr: string;
  description: string;
  descriptionAr: string;
  image: string;
}

export interface ServiceStep {
  title: string;
  titleAr: string;
  description: string;
  descriptionAr: string;
}

export interface Client {
  id: string;
  logo: string;
}

export interface UniqueFeature {
  title: string;
  titleAr: string;
  description: string;
  descriptionAr: string;
  icon: string;
}

export interface SectorServiceData {
  previewImages: string[];
  projects: Project[];
  serviceImages: string[];
  serviceContent: string;
  serviceContentAr: string;
  serviceSteps: ServiceStep[];
  clients: number[];
  uniqueFeatures: UniqueFeature[];
}

@Injectable({
  providedIn: 'root'
})
export class SectorsService {
  getAllSectors(): Observable<Sector[]> {
    const sectors: Sector[] = [
      {
        id: 'elevator',
        name: 'Elevator Sector',
        nameAr: 'قطاع المصاعد',
        description: 'Established in 2006 AD in order to keep pace with the urban renaissance',
        descriptionAr: 'تأسس في عام 2006 م لمواكبة النهضة العمرانية',
        route: 'elevator',
        image:'elevator.png'
      },
      {
        id: 'contracting',
        name: 'Contracting Sector',
        nameAr: 'قطاع المقاولات',
        description: 'Successfully implementing several projects',
        descriptionAr: 'تنفيذ عدة مشاريع بنجاح',
        route: 'contracting',
        image: 'contracting.png'
      },
      {
        id: 'investments',
        name: 'Investments Sector',
        nameAr: 'قطاع الاستثمارات',
        description: 'Strategic investments and partnerships',
        descriptionAr: 'الاستثمارات والشراكات الاستراتيجية',
        route: 'investments',
        image:'investment.png'
      },
      {
        id: 'next-consulting',
        name: 'Next Consulting Solutions',
        nameAr: 'الحلول الاستشارية التالية',
        description: 'Advanced IT consulting and technology solutions',
        descriptionAr: 'حلول استشارية تقنية متقدمة',
        route: 'next-consulting',
        image:'consulting.png'
      },
    ];
    return of(sectors);
  }

  getSectorById(id: string): Observable<Sector | null> {
    return this.getAllSectors().pipe(
      map(sectors => sectors.find(s => s.id === id) || null)
    );
  }

  getSectorData(sectorId: string): SectorServiceData {
    const dataMap: { [key: string]: SectorServiceData } = {
      'elevator': {
        previewImages: ['assets/images/services/elevator2.png'],
        projects: [
          {
            id: '1',
            title: 'Modern Elevator Installation',
            titleAr: 'تركيب مصاعد حديثة',
            description: 'Complete installation of state-of-the-art elevator systems in commercial buildings.',
            descriptionAr: 'تركيب كامل لأنظمة المصاعد المتطورة في المباني التجارية.',
            image: 'assets/images/hero-slide-1.jpg'
          },
          {
            id: '2',
            title: 'Elevator Maintenance Program',
            titleAr: 'برنامج صيانة المصاعد',
            description: 'Comprehensive maintenance services ensuring optimal performance and safety.',
            descriptionAr: 'خدمات صيانة شاملة لضمان الأداء الأمثل والسلامة.',
            image: 'assets/images/hero-slide-2.jpg'
          },
          {
            id: '3',
            title: 'Elevator Modernization',
            titleAr: 'تحديث المصاعد',
            description: 'Upgrading existing elevator systems with latest technology and safety features.',
            descriptionAr: 'ترقية أنظمة المصاعد الموجودة بأحدث التقنيات وميزات السلامة.',
            image: 'assets/images/hero-slide-3.jpg'
          }
        ],
        serviceImages: [
          'assets/images/hero-slide-1.jpg',
          'assets/images/hero-slide-2.jpg',
          'assets/images/hero-slide-3.jpg'
        ],
        serviceContent: 'Our elevator services encompass installation, maintenance, and modernization of vertical transportation systems. We ensure safety, efficiency, and compliance with international standards.',
        serviceContentAr: 'تشمل خدمات المصاعد لدينا التركيب والصيانة وتحديث أنظمة النقل العمودي. نضمن السلامة والكفاءة والامتثال للمعايير الدولية.',
        serviceSteps: [
          { 
            title: 'Site Assessment', 
            titleAr: 'تقييم الموقع', 
            description: 'Comprehensive evaluation of building structure and requirements.', 
            descriptionAr: 'تقييم شامل لهيكل المبنى والمتطلبات.' 
          },
          { 
            title: 'System Design', 
            titleAr: 'تصميم النظام', 
            description: 'Custom elevator system design tailored to building specifications.', 
            descriptionAr: 'تصميم نظام مصاعد مخصص وفقاً لمواصفات المبنى.' 
          },
          { 
            title: 'Installation', 
            titleAr: 'التركيب', 
            description: 'Professional installation by certified technicians.', 
            descriptionAr: 'تركيب احترافي من قبل فنيين معتمدين.' 
          },
          { 
            title: 'Testing & Certification', 
            titleAr: 'الاختبار والشهادة', 
            description: 'Rigorous testing and certification before handover.', 
            descriptionAr: 'اختبارات صارمة والشهادة قبل التسليم.' 
          },
          { 
            title: 'Maintenance Support', 
            titleAr: 'دعم الصيانة', 
            description: 'Ongoing maintenance and support services.', 
            descriptionAr: 'خدمات الصيانة والدعم المستمرة.' 
          }
        ],
        clients: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        uniqueFeatures: [
          {
            title: 'Safety First',
            titleAr: 'السلامة أولاً',
            description: 'Highest safety standards and certifications in the industry.',
            descriptionAr: 'أعلى معايير وشهادات السلامة في الصناعة.',
            icon: '🛡️'
          },
          {
            title: 'Modern Technology',
            titleAr: 'التكنولوجيا الحديثة',
            description: 'State-of-the-art elevator systems with smart features.',
            descriptionAr: 'أنظمة مصاعد متطورة مع ميزات ذكية.',
            icon: '⚙️'
          },
          {
            title: 'Expert Team',
            titleAr: 'فريق خبير',
            description: 'Certified technicians with years of experience.',
            descriptionAr: 'فنيون معتمدون مع سنوات من الخبرة.',
            icon: '👷'
          },
          {
            title: '24/7 Support',
            titleAr: 'دعم على مدار الساعة',
            description: 'Round-the-clock maintenance and emergency support.',
            descriptionAr: 'صيانة ودعم طوارئ على مدار الساعة.',
            icon: '🔄'
          }
        ]
      },
      'contracting': {
        previewImages: ['assets/images/services/contracting2.jpg'],
        projects: [
          {
            id: '1',
            title: 'Residential Complex',
            titleAr: 'مجمع سكني',
            description: 'Large-scale residential development project with modern amenities.',
            descriptionAr: 'مشروع تطوير سكني واسع النطاق مع مرافق حديثة.',
            image: 'assets/images/hero-slide-1.jpg'
          },
          {
            id: '2',
            title: 'Commercial Building',
            titleAr: 'مبنى تجاري',
            description: 'Premium commercial building construction with advanced facilities.',
            descriptionAr: 'بناء مبنى تجاري فاخر مع مرافق متقدمة.',
            image: 'assets/images/hero-slide-2.jpg'
          },
          {
            id: '3',
            title: 'Administrative Center',
            titleAr: 'مركز إداري',
            description: 'Modern administrative facility designed for efficiency and productivity.',
            descriptionAr: 'منشأة إدارية حديثة مصممة للكفاءة والإنتاجية.',
            image: 'assets/images/hero-slide-3.jpg'
          }
        ],
        serviceImages: [
          'assets/images/hero-slide-2.jpg',
          'assets/images/hero-slide-3.jpg',
          'assets/images/hero-slide-1.jpg'
        ],
        serviceContent: 'We deliver high-quality construction projects with precision and excellence. Our contracting services cover residential, commercial, and administrative buildings with proven expertise.',
        serviceContentAr: 'ننفذ مشاريع بناء عالية الجودة بدقة وتميز. تغطي خدمات المقاولات لدينا المباني السكنية والتجارية والإدارية بخبرة مثبتة.',
        serviceSteps: [
          { 
            title: 'Project Planning', 
            titleAr: 'تخطيط المشروع', 
            description: 'Detailed project planning and feasibility studies.', 
            descriptionAr: 'تخطيط مفصل للمشروع ودراسات الجدوى.' 
          },
          { 
            title: 'Design & Engineering', 
            titleAr: 'التصميم والهندسة', 
            description: 'Architectural design and engineering solutions.', 
            descriptionAr: 'التصميم المعماري والحلول الهندسية.' 
          },
          { 
            title: 'Construction', 
            titleAr: 'البناء', 
            description: 'Quality construction with skilled workforce.', 
            descriptionAr: 'بناء عالي الجودة مع قوة عاملة ماهرة.' 
          },
          { 
            title: 'Quality Control', 
            titleAr: 'مراقبة الجودة', 
            description: 'Continuous quality monitoring and inspections.', 
            descriptionAr: 'مراقبة الجودة المستمرة والتفتيش.' 
          },
          { 
            title: 'Project Delivery', 
            titleAr: 'تسليم المشروع', 
            description: 'Timely delivery with all specifications met.', 
            descriptionAr: 'التسليم في الوقت المحدد مع استيفاء جميع المواصفات.' 
          }
        ],
        clients: [11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
        uniqueFeatures: [
          {
            title: 'Quality Excellence',
            titleAr: 'التميز في الجودة',
            description: 'Uncompromising commitment to quality in every project.',
            descriptionAr: 'التزام لا يتزعزع بالجودة في كل مشروع.',
            icon: '⭐'
          },
          {
            title: 'Timely Delivery',
            titleAr: 'التسليم في الوقت المحدد',
            description: 'Projects completed on schedule with precision.',
            descriptionAr: 'مشاريع مكتملة في الوقت المحدد بدقة.',
            icon: '⏱️'
          },
          {
            title: 'Expert Workforce',
            titleAr: 'قوة عاملة خبيرة',
            description: 'Skilled professionals with extensive experience.',
            descriptionAr: 'محترفون ماهرون مع خبرة واسعة.',
            icon: '👨‍🔧'
          },
          {
            title: 'Comprehensive Solutions',
            titleAr: 'حلول شاملة',
            description: 'End-to-end construction services from planning to delivery.',
            descriptionAr: 'خدمات بناء شاملة من التخطيط إلى التسليم.',
            icon: '🏗️'
          }
        ]
      },
      'next-consulting': {
        previewImages: ['assets/images/services/consulting2.webp'],
        projects: [
          {
            id: '1',
            title: 'IT Infrastructure Setup',
            titleAr: 'إعداد البنية التحتية لتكنولوجيا المعلومات',
            description: 'Complete IT infrastructure implementation for enterprise solutions.',
            descriptionAr: 'تنفيذ كامل للبنية التحتية لتكنولوجيا المعلومات للحلول المؤسسية.',
            image: 'assets/images/hero-slide-1.jpg'
          },
          {
            id: '2',
            title: 'Cloud Migration',
            titleAr: 'الانتقال إلى السحابة',
            description: 'Seamless cloud migration services with minimal downtime.',
            descriptionAr: 'خدمات الانتقال السلس إلى السحابة مع الحد الأدنى من التوقف.',
            image: 'assets/images/hero-slide-2.jpg'
          },
          {
            id: '3',
            title: 'Digital Transformation',
            titleAr: 'التحول الرقمي',
            description: 'Comprehensive digital transformation consulting and implementation.',
            descriptionAr: 'استشارات وتنفيذ شامل للتحول الرقمي.',
            image: 'assets/images/hero-slide-3.jpg'
          }
        ],
        serviceImages: [
          'assets/images/hero-slide-3.jpg',
          'assets/images/hero-slide-1.jpg',
          'assets/images/hero-slide-2.jpg'
        ],
        serviceContent: 'We provide cutting-edge IT consulting and technology solutions. Our services help businesses thrive in the digital age with innovative technology strategies and implementations.',
        serviceContentAr: 'نقدم استشارات تقنية متقدمة وحلول تكنولوجية. تساعد خدماتنا الشركات على الازدهار في العصر الرقمي باستراتيجيات وتنفيذات تكنولوجية مبتكرة.',
        serviceSteps: [
          { 
            title: 'Technology Assessment', 
            titleAr: 'تقييم التكنولوجيا', 
            description: 'Comprehensive analysis of current technology infrastructure.', 
            descriptionAr: 'تحليل شامل للبنية التحتية التكنولوجية الحالية.' 
          },
          { 
            title: 'Strategy Development', 
            titleAr: 'تطوير الاستراتيجية', 
            description: 'Custom technology strategy aligned with business goals.', 
            descriptionAr: 'استراتيجية تكنولوجية مخصصة تتماشى مع أهداف العمل.' 
          },
          { 
            title: 'Implementation', 
            titleAr: 'التنفيذ', 
            description: 'Professional implementation of technology solutions.', 
            descriptionAr: 'تنفيذ احترافي للحلول التكنولوجية.' 
          },
          { 
            title: 'Integration & Testing', 
            titleAr: 'التكامل والاختبار', 
            description: 'Seamless integration and comprehensive testing.', 
            descriptionAr: 'تكامل سلس واختبار شامل.' 
          },
          { 
            title: 'Training & Support', 
            titleAr: 'التدريب والدعم', 
            description: 'Staff training and ongoing technical support.', 
            descriptionAr: 'تدريب الموظفين والدعم الفني المستمر.' 
          }
        ],
        clients: [21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
        uniqueFeatures: [
          {
            title: 'Innovation',
            titleAr: 'الابتكار',
            description: 'Cutting-edge technology solutions and strategies.',
            descriptionAr: 'حلول واستراتيجيات تكنولوجية متطورة.',
            icon: '💡'
          },
          {
            title: 'Expert Consultation',
            titleAr: 'استشارة خبيرة',
            description: 'Experienced IT consultants with industry expertise.',
            descriptionAr: 'استشاريون تقنيون ذوو خبرة في الصناعة.',
            icon: '🎓'
          },
          {
            title: 'Scalable Solutions',
            titleAr: 'حلول قابلة للتوسع',
            description: 'Technology solutions that grow with your business.',
            descriptionAr: 'حلول تكنولوجية تنمو مع عملك.',
            icon: '📈'
          },
          {
            title: 'Security Focus',
            titleAr: 'التركيز على الأمان',
            description: 'Robust security measures and data protection.',
            descriptionAr: 'تدابير أمنية قوية وحماية البيانات.',
            icon: '🔒'
          }
        ]
      },
      'investments': {
        previewImages: ['assets/images/services/investment.png'],
        projects: [
          {
            id: '1',
            title: 'Strategic Partnership',
            titleAr: 'شراكة استراتيجية',
            description: 'Long-term strategic investment partnership in growing markets.',
            descriptionAr: 'شراكة استثمارية استراتيجية طويلة الأجل في الأسواق النامية.',
            image: 'assets/images/hero-slide-1.jpg'
          },
          {
            id: '2',
            title: 'Portfolio Diversification',
            titleAr: 'تنويع المحفظة',
            description: 'Diversified investment portfolio across multiple sectors.',
            descriptionAr: 'محفظة استثمارية متنوعة عبر قطاعات متعددة.',
            image: 'assets/images/hero-slide-2.jpg'
          },
          {
            id: '3',
            title: 'Growth Investment',
            titleAr: 'استثمار النمو',
            description: 'Strategic investments in high-growth potential companies.',
            descriptionAr: 'استثمارات استراتيجية في شركات ذات إمكانات نمو عالية.',
            image: 'assets/images/hero-slide-3.jpg'
          }
        ],
        serviceImages: [
          'assets/images/hero-slide-1.jpg',
          'assets/images/hero-slide-3.jpg',
          'assets/images/hero-slide-2.jpg'
        ],
        serviceContent: 'We offer strategic investment services and partnerships for sustainable growth. Our investment approach focuses on long-term value creation and portfolio diversification.',
        serviceContentAr: 'نقدم خدمات استثمارية استراتيجية وشراكات للنمو المستدام. يركز نهجنا الاستثماري على خلق قيمة طويلة الأجل وتنويع المحفظة.',
        serviceSteps: [
          { 
            title: 'Investment Analysis', 
            titleAr: 'تحليل الاستثمار', 
            description: 'Thorough analysis of investment opportunities and risks.', 
            descriptionAr: 'تحليل شامل لفرص الاستثمار والمخاطر.' 
          },
          { 
            title: 'Portfolio Strategy', 
            titleAr: 'استراتيجية المحفظة', 
            description: 'Development of diversified investment portfolio strategy.', 
            descriptionAr: 'تطوير استراتيجية محفظة استثمارية متنوعة.' 
          },
          { 
            title: 'Partnership Formation', 
            titleAr: 'تشكيل الشراكة', 
            description: 'Strategic partnership agreements and structures.', 
            descriptionAr: 'اتفاقيات وهياكل شراكة استراتيجية.' 
          },
          { 
            title: 'Due Diligence', 
            titleAr: 'العناية الواجبة', 
            description: 'Comprehensive due diligence and risk assessment.', 
            descriptionAr: 'العناية الواجبة الشاملة وتقييم المخاطر.' 
          },
          { 
            title: 'Ongoing Management', 
            titleAr: 'الإدارة المستمرة', 
            description: 'Active portfolio management and performance monitoring.', 
            descriptionAr: 'إدارة نشطة للمحفظة ومراقبة الأداء.' 
          }
        ],
        clients: [31, 32, 33, 34, 35, 36, 37, 38, 39, 40],
        uniqueFeatures: [
          {
            title: 'Strategic Vision',
            titleAr: 'الرؤية الاستراتيجية',
            description: 'Long-term investment strategies for sustainable growth.',
            descriptionAr: 'استراتيجيات استثمارية طويلة الأجل للنمو المستدام.',
            icon: '🎯'
          },
          {
            title: 'Diversified Portfolio',
            titleAr: 'محفظة متنوعة',
            description: 'Well-balanced investment portfolio across sectors.',
            descriptionAr: 'محفظة استثمارية متوازنة عبر القطاعات.',
            icon: '📊'
          },
          {
            title: 'Risk Management',
            titleAr: 'إدارة المخاطر',
            description: 'Comprehensive risk assessment and mitigation strategies.',
            descriptionAr: 'تقييم شامل للمخاطر واستراتيجيات التخفيف.',
            icon: '⚖️'
          },
          {
            title: 'Value Creation',
            titleAr: 'خلق القيمة',
            description: 'Focus on creating long-term value for stakeholders.',
            descriptionAr: 'التركيز على خلق قيمة طويلة الأجل لأصحاب المصلحة.',
            icon: '💎'
          }
        ]
      }
    };
    return dataMap[sectorId] || {
      previewImages: [],
      projects: [],
      serviceImages: [],
      serviceContent: '',
      serviceContentAr: '',
      serviceSteps: [],
      clients: [],
      uniqueFeatures: []
    };
  }
}
