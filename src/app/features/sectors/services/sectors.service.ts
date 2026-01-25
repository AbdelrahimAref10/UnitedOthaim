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
            title: 'Replacement, Supply, and Installation of Elevators at Qassim University Buildings',
            titleAr: 'استبدال وتوريد وتركيب المصاعد في مباني جامعة القصيم',
            description: 'Complete replacement and installation of modern elevator systems across multiple university buildings.',
            descriptionAr: 'استبدال وتركيب كامل لأنظمة المصاعد الحديثة عبر مباني الجامعة المتعددة.',
            image: 'assets/images/elevator/proj1.png'
          },
          {
            id: '2',
            title: 'Supply, Installation, and Commissioning of 9 Electric Elevators at the Ministry Branch Buildings in the Eastern Region and Riyadh',
            titleAr: 'توريد وتركيب وتشغيل 9 مصاعد كهربائية في مباني فروع الوزارة في المنطقة الشرقية والرياض',
            description: 'Installation and commissioning of multiple electric elevators in ministry branch facilities across two major regions.',
            descriptionAr: 'تركيب وتشغيل عدة مصاعد كهربائية في مرافق فروع الوزارة عبر منطقتين رئيسيتين.',
            image: 'assets/images/elevator/proj2.png'
          },
          {
            id: '3',
            title: 'Replacement of 10 Elevators in the First Phase at the Shuaiba Desalination Plants',
            titleAr: 'استبدال 10 مصاعد في المرحلة الأولى في محطات تحلية الشعيبة',
            description: 'Major elevator replacement project in critical infrastructure facility, phase one implementation.',
            descriptionAr: 'مشروع استبدال مصاعد كبير في منشأة البنية التحتية الحرجة، تنفيذ المرحلة الأولى.',
            image: 'assets/images/elevator/proj3.png'
          },
          {
            id: '4',
            title: 'Supply and Installation of Passenger Elevators and a Service Elevator at Various Locations of the General Organization for Military Industries – Al-Kharj',
            titleAr: 'توريد وتركيب مصاعد ركاب ومصعد خدمة في مواقع مختلفة للهيئة العامة للصناعات العسكرية – الخرج',
            description: 'Comprehensive elevator installation project including passenger and service elevators at multiple facility locations.',
            descriptionAr: 'مشروع تركيب مصاعد شامل يشمل مصاعد ركاب وخدمة في مواقع منشآت متعددة.',
            image: 'assets/images/elevator/proj4.jpg'
          },
          {
            id: '5',
            title: 'Modernization of 6 Elevators at Al-Mina Royal Palace – Royal Protocol',
            titleAr: 'تحديث 6 مصاعد في قصر المينا الملكي – البروتوكول الملكي',
            description: 'Modernization project upgrading existing elevators with latest technology and safety features at royal facility.',
            descriptionAr: 'مشروع تحديث لترقية المصاعد الموجودة بأحدث التقنيات وميزات السلامة في المنشأة الملكية.',
            image: 'assets/images/elevator/proj5.png'
          },
          {
            id: '6',
            title: 'Replacement of Old Elevators in Buildings 17 and 19 with New Elevators',
            titleAr: 'استبدال المصاعد القديمة في المباني 17 و 19 بمصاعد جديدة',
            description: 'Complete replacement of outdated elevator systems with modern, efficient elevators.',
            descriptionAr: 'استبدال كامل لأنظمة المصاعد القديمة بمصاعد حديثة وفعالة.',
            image: 'assets/images/elevator/proj6.jpg'
          },
          {
            id: '7',
            title: 'Supply and Installation of 6 Elevators at the Ministry Buildings in Riyadh',
            titleAr: 'توريد وتركيب 6 مصاعد في مباني الوزارة في الرياض',
            description: 'Installation of multiple elevators in ministry headquarters building complex.',
            descriptionAr: 'تركيب عدة مصاعد في مجمع مبنى مقر الوزارة.',
            image: 'assets/images/elevator/22.jpg'
          },
          {
            id: '8',
            title: 'Replacement of Electric Elevators at the Royal Saudi Air Force Command',
            titleAr: 'استبدال المصاعد الكهربائية في قيادة القوات الجوية الملكية السعودية',
            description: 'Replacement project for electric elevators at critical military command facility.',
            descriptionAr: 'مشروع استبدال للمصاعد الكهربائية في منشأة القيادة العسكرية الحرجة.',
            image: 'assets/images/elevator/33.jpg'
          },
          {
            id: '9',
            title: 'Replacement, Supply, and Installation of New Elevators at Qasr Al-Hukm Building (Phase One)',
            titleAr: 'استبدال وتوريد وتركيب مصاعد جديدة في مبنى قصر الحكم (المرحلة الأولى)',
            description: 'Major elevator replacement and installation project at historic government building, phase one completion.',
            descriptionAr: 'مشروع استبدال وتركيب مصاعد كبير في مبنى حكومي تاريخي، إكمال المرحلة الأولى.',
            image: 'assets/images/elevator/proj7.jpg'
          },
          {
            id: '10',
            title: 'Maintenance of Buildings and Branches of the Saudi Standards, Metrology and Quality Organization (SASO) in Riyadh',
            titleAr: 'صيانة مباني وفروع الهيئة السعودية للمواصفات والمقاييس والجودة (SASO) في الرياض',
            description: 'Comprehensive maintenance services for elevators across multiple SASO facility locations.',
            descriptionAr: 'خدمات صيانة شاملة للمصاعد عبر مواقع منشآت SASO المتعددة.',
            image: 'assets/images/elevator/proj8.jpg'
          },
          {
            id: '11',
            title: 'Elevator Maintenance Works at the General Directorate of Civil Defense Building in Riyadh',
            titleAr: 'أعمال صيانة المصاعد في مبنى المديرية العامة للدفاع المدني في الرياض',
            description: 'Ongoing maintenance and support services for elevators at civil defense headquarters.',
            descriptionAr: 'خدمات صيانة ودعم مستمرة للمصاعد في مقر الدفاع المدني.',
            image: 'assets/images/elevator/proj9.jpg'
          },
          {
            id: '12',
            title: 'Maintenance and Operation of Electric Elevators in Public Security Buildings Across Various Regions of the Kingdom',
            titleAr: 'صيانة وتشغيل المصاعد الكهربائية في مباني الأمن العام عبر مناطق مختلفة من المملكة',
            description: 'Nationwide maintenance and operation services for elevators in public security facilities.',
            descriptionAr: 'خدمات صيانة وتشغيل على مستوى المملكة للمصاعد في مرافق الأمن العام.',
            image: 'assets/images/elevator/proj10.png'
          },
          {
            id: '13',
            title: 'Replacement, Supply, Installation, and Commissioning of Electric Elevators at King Fahd Specialist Hospital',
            titleAr: 'استبدال وتوريد وتركيب وتشغيل المصاعد الكهربائية في مستشفى الملك فهد التخصصي',
            description: 'Complete elevator system replacement and installation at major medical facility.',
            descriptionAr: 'استبدال وتركيب كامل لنظام المصاعد في منشأة طبية كبرى.',
            image: 'assets/images/elevator/proj11.png'
          },
          {
            id: '14',
            title: 'Maintenance of 512 Elevators at Imam Mohammad Ibn Saud Islamic University in Riyadh',
            titleAr: 'صيانة 512 مصعد في جامعة الإمام محمد بن سعود الإسلامية في الرياض',
            description: 'Large-scale maintenance contract for extensive elevator fleet at major educational institution.',
            descriptionAr: 'عقد صيانة واسع النطاق لأسطول مصاعد كبير في مؤسسة تعليمية كبرى.',
            image: 'assets/images/elevator/proj12.jpg'
          },
          {
            id: '15',
            title: 'Supply, Installation, Commissioning, and Testing of Electric Elevators for Research Institute Building No. 15',
            titleAr: 'توريد وتركيب وتشغيل واختبار المصاعد الكهربائية لمبنى معهد البحوث رقم 15',
            description: 'Complete elevator installation project including commissioning and testing for research facility.',
            descriptionAr: 'مشروع تركيب مصاعد كامل يشمل التشغيل والاختبار لمنشأة البحوث.',
            image: 'assets/images/elevator/proj13.jpg'
          },
          {
            id: '16',
            title: 'Replacement and Installation of Elevators in the Administrative Building and the Heart and Liver Building at King Abdulaziz Medical City in Riyadh – National Guard',
            titleAr: 'استبدال وتركيب المصاعد في المبنى الإداري ومبنى القلب والكبد في مدينة الملك عبدالعزيز الطبية في الرياض – الحرس الوطني',
            description: 'Elevator replacement and installation across multiple buildings at major medical city complex.',
            descriptionAr: 'استبدال وتركيب المصاعد عبر مباني متعددة في مجمع مدينة طبية كبرى.',
            image: 'assets/images/elevator/proj14.png'
          },
          {
            id: '17',
            title: 'Supply and Installation of Passenger Elevators in 6 Regions of the Kingdom – Ministry of Justice',
            titleAr: 'توريد وتركيب مصاعد ركاب في 6 مناطق من المملكة – وزارة العدل',
            description: 'Nationwide elevator installation project across six regions for ministry facilities.',
            descriptionAr: 'مشروع تركيب مصاعد على مستوى المملكة عبر ست مناطق لمرافق الوزارة.',
            image: 'assets/images/elevator/proj15.jpg'
          },
          {
            id: '18',
            title: 'Supply and Installation of Elevators for the Ministry Building in the Digital City',
            titleAr: 'توريد وتركيب المصاعد لمبنى الوزارة في المدينة الرقمية',
            description: 'Modern elevator installation for ministry facility in digital city development.',
            descriptionAr: 'تركيب مصاعد حديثة لمنشأة الوزارة في تطوير المدينة الرقمية.',
            image: 'assets/images/elevator/proj16.png'
          },
          {
            id: '19',
            title: 'Supply, Installation, and Operation Project for Electric Elevators for the King Fahd Specialist Hospital Bridge and the Riyadh Central Hospital Housing',
            titleAr: 'مشروع توريد وتركيب وتشغيل المصاعد الكهربائية لجسر مستشفى الملك فهد التخصصي وسكن مستشفى الرياض المركزي',
            description: 'Comprehensive elevator project including bridge and housing facilities at major hospital complex.',
            descriptionAr: 'مشروع مصاعد شامل يشمل مرافق الجسر والسكن في مجمع مستشفى كبرى.',
            image: 'assets/images/elevator/proj11.png'
          },
          {
            id: '20',
            title: 'Supply, Installation, Commissioning, and Testing of 8 Elevators at King Abdulaziz Medical City in Riyadh',
            titleAr: 'توريد وتركيب وتشغيل واختبار 8 مصاعد في مدينة الملك عبدالعزيز الطبية في الرياض',
            description: 'Complete elevator installation and commissioning project at major medical facility.',
            descriptionAr: 'مشروع تركيب وتشغيل مصاعد كامل في منشأة طبية كبرى.',
            image: 'assets/images/elevator/proj14.png'
          },
          {
            id: '21',
            title: 'Replacement, Supply, Installation, and Commissioning of Elevators for Hospitals and Healthcare Facilities – Ministry of Health',
            titleAr: 'استبدال وتوريد وتركيب وتشغيل المصاعد لمستشفيات ومرافق الرعاية الصحية – وزارة الصحة',
            description: 'Comprehensive elevator replacement and installation project for healthcare facilities across the ministry network.',
            descriptionAr: 'مشروع شامل لاستبدال وتركيب المصاعد لمرافق الرعاية الصحية عبر شبكة الوزارة.',
            image: 'assets/images/elevator/proj19.png'
          },
          {
            id: '22',
            title: 'General Security Maintenance Project in 5 Regions',
            titleAr: 'مشروع صيانة الأمن العام في 5 مناطق',
            description: 'Large-scale maintenance project covering elevator systems across five regions for General Security facilities.',
            descriptionAr: 'مشروع صيانة واسع النطاق يغطي أنظمة المصاعد عبر خمس مناطق لمرافق الأمن العام.',
            image: 'assets/images/elevator/proj21.jpg'
          },
          {
            id: '23',
            title: 'Maintenance Project for the Elevators of the Security Forces Hospital in Riyadh',
            titleAr: 'مشروع صيانة مصاعد مستشفى قوات الأمن في الرياض',
            description: 'Specialized maintenance services for elevator systems at major security forces medical facility.',
            descriptionAr: 'خدمات صيانة متخصصة لأنظمة المصاعد في منشأة طبية كبرى لقوات الأمن.',
            image: 'assets/images/elevator/proj22.png'
          },
          {
            id: '24',
            title: 'Maintenance and Operation Project for 33 Elevators in Buildings Affiliated with the General Directorate of Narcotics Control',
            titleAr: 'مشروع صيانة وتشغيل 33 مصعد في المباني التابعة للإدارة العامة لمكافحة المخدرات',
            description: 'Comprehensive maintenance and operation contract for elevator fleet at narcotics control facilities.',
            descriptionAr: 'عقد صيانة وتشغيل شامل لأسطول المصاعد في مرافق مكافحة المخدرات.',
            image: 'assets/images/elevator/proj23.jpg'
          },
          {
            id: '25',
            title: 'Maintenance and Operation Project for the Emergency Housing Elevators in Dammam, Khobar, and Jeddah',
            titleAr: 'مشروع صيانة وتشغيل مصاعد السكن الطارئ في الدمام والخبر وجدة',
            description: 'Multi-city maintenance and operation project for emergency housing elevator systems.',
            descriptionAr: 'مشروع صيانة وتشغيل متعدد المدن لأنظمة مصاعد السكن الطارئ.',
            image: 'assets/images/elevator/proj24.jpg'
          },
          {
            id: '26',
            title: 'Maintenance Project for Ministry of Justice Buildings in All Regions and Cities of the Kingdom',
            titleAr: 'مشروع صيانة مباني وزارة العدل في جميع مناطق ومدن المملكة',
            description: 'Nationwide maintenance project covering all Ministry of Justice facilities across the entire kingdom.',
            descriptionAr: 'مشروع صيانة على مستوى المملكة يغطي جميع مرافق وزارة العدل في جميع أنحاء المملكة.',
            image: 'assets/images/elevator/proj25.jpg'
          },
          {
            id: '27',
            title: 'Maintenance Project for 100 Elevators in Endowments (Awqaf) in Makkah, Madinah, Taif, Al-Ahsa, Jeddah, and Riyadh',
            titleAr: 'مشروع صيانة 100 مصعد في الأوقاف في مكة المكرمة والمدينة المنورة والطائف والأحساء وجدة والرياض',
            description: 'Large-scale maintenance contract for extensive elevator fleet across six major cities in endowments facilities.',
            descriptionAr: 'عقد صيانة واسع النطاق لأسطول مصاعد كبير عبر ست مدن كبرى في مرافق الأوقاف.',
            image: 'assets/images/elevator/proj26.jpg'
          },
          {
            id: '28',
            title: 'King Fahd Hospital Elevators Project in Jeddah',
            titleAr: 'مشروع مصاعد مستشفى الملك فهد في جدة',
            description: 'Complete elevator installation and maintenance project at major hospital facility in Jeddah.',
            descriptionAr: 'مشروع تركيب وصيانة مصاعد كامل في منشأة مستشفى كبرى في جدة.',
            image: 'assets/images/elevator/proj27.jpg'
          },
          {
            id: '29',
            title: 'Project for the Replacement, Supply, and Installation of New Elevators at the Qasr Al-Hukm (Ruler\'s Palace) Building, under the Royal Commission for Riyadh City (Phase Two)',
            titleAr: 'مشروع استبدال وتوريد وتركيب مصاعد جديدة في مبنى قصر الحكم، تحت إشراف الهيئة الملكية لمدينة الرياض (المرحلة الثانية)',
            description: 'Prestigious elevator replacement and installation project at historic palace building in Riyadh city development.',
            descriptionAr: 'مشروع استبدال وتركيب مصاعد مرموق في مبنى قصر تاريخي في تطوير مدينة الرياض.',
            image: 'assets/images/elevator/proj28.jpg'
          },
          {
            id: '30',
            title: 'Elevator Maintenance Project for King Salman Armed Forces Hospital in Tabuk',
            titleAr: 'مشروع صيانة مصاعد مستشفى الملك سلمان للقوات المسلحة في تبوك',
            description: 'Specialized maintenance services for elevator systems at major armed forces medical facility in Tabuk.',
            descriptionAr: 'خدمات صيانة متخصصة لأنظمة المصاعد في منشأة طبية كبرى للقوات المسلحة في تبوك.',
            image: 'assets/images/elevator/proj29.jpg'
          },
          {
            id: '31',
            title: 'Elevator Maintenance Project at the Prince Sultan Cardiac Center (for the Treatment and Surgery of Heart Diseases)',
            titleAr: 'مشروع صيانة المصاعد في مركز الأمير سلطان للقلب (لعلاج وجراحة أمراض القلب)',
            description: 'Specialized maintenance services for elevator systems at premier cardiac treatment and surgery center.',
            descriptionAr: 'خدمات صيانة متخصصة لأنظمة المصاعد في مركز رائد لعلاج وجراحة القلب.',
            image: 'assets/images/elevator/proj30.jpg'
          },
          {
            id: '32',
            title: 'Operation and Maintenance Project for the Elevators of King Faisal University in Al-Ahsa',
            titleAr: 'مشروع تشغيل وصيانة مصاعد جامعة الملك فيصل في الأحساء',
            description: 'Comprehensive operation and maintenance contract for elevator systems at major educational institution.',
            descriptionAr: 'عقد تشغيل وصيانة شامل لأنظمة المصاعد في مؤسسة تعليمية كبرى.',
            image: 'assets/images/elevator/proj31.jpg'
          },

        ],
        serviceImages: [
          'assets/images/elevator/proj15.jpg',
          'assets/images/elevator/proj12.jpg',
          'assets/images/elevator/proj13.jpg',
        ],
        serviceContent: 'We provide comprehensive vertical transportation solutions including supply, installation, maintenance, and spare parts. Our services cover elevators, lifts, and escalators of various types and capacities.',
        serviceContentAr: 'نقدم حلول نقل عمودي شاملة تشمل التوريد والتركيب والصيانة وقطع الغيار. تغطي خدماتنا المصاعد والمصاعد والمصاعد المتحركة من أنواع وقدرات مختلفة.',
        serviceSteps: [
          { 
            title: 'Spare Parts', 
            titleAr: 'قطع الغيار', 
            description: 'Our spare parts division offers a wide range of elevator parts of various capacities and types, all of high quality and at competitive prices, allowing our clients to find everything they need in one place.', 
            descriptionAr: 'يوفر قسم قطع الغيار لدينا مجموعة واسعة من أجزاء المصاعد من قدرات وأنواع مختلفة، جميعها عالية الجودة وبأسعار تنافسية، مما يسمح لعملائنا بالعثور على كل ما يحتاجونه في مكان واحد.' 
          },
          { 
            title: 'Maintenance', 
            titleAr: 'الصيانة', 
            description: 'Maintenance of elevators and escalators for both public and private sectors, as well as individuals. This includes preventive maintenance, supervision of maintenance projects, and the rehabilitation and modernization of elevators to keep up with the latest technologies.', 
            descriptionAr: 'صيانة المصاعد والمصاعد المتحركة للقطاعين العام والخاص، وكذلك الأفراد. يشمل ذلك الصيانة الوقائية وإشراف مشاريع الصيانة وإعادة تأهيل وتحديث المصاعد لمواكبة أحدث التقنيات.' 
          },
          { 
            title: 'Supply and Installation', 
            titleAr: 'التوريد والتركيب', 
            description: 'Supply and installation of elevators, lifts, and escalators of various types and capacities. The company has an extensive record of projects and clients across the public, private, and residential sectors. We also maintain strong relationships with major manufacturers of elevators, lifts, and escalators.', 
            descriptionAr: 'توريد وتركيب المصاعد والمصاعد والمصاعد المتحركة من أنواع وقدرات مختلفة. لدى الشركة سجل حافل من المشاريع والعملاء عبر القطاعات العامة والخاصة والسكنية. نحافظ أيضًا على علاقات قوية مع الشركات المصنعة الرائدة للمصاعد والمصاعد والمصاعد المتحركة.' 
          }
        ],
        clients: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        uniqueFeatures: [
          {
            title: 'Extensive Experience',
            titleAr: 'خبرة واسعة',
            description: 'Extensive experience in supply, installation, and maintenance of elevators, lifts, and escalators since 2006.',
            descriptionAr: 'خبرة واسعة في توريد وتركيب وصيانة المصاعد والمصاعد والمصاعد المتحركة منذ عام 2006.',
            icon: '📈'
          },
          {
            title: 'Diverse Client Portfolio',
            titleAr: 'محفظة عملاء متنوعة',
            description: 'Distinguished list of clients from both government and private sectors, including major institutions and facilities.',
            descriptionAr: 'قائمة مميزة من العملاء من القطاعين الحكومي والخاص، بما في ذلك المؤسسات والمرافق الكبرى.',
            icon: '🏢'
          },
          {
            title: 'Manufacturer Partnerships',
            titleAr: 'شراكات مع الشركات المصنعة',
            description: 'Strong relationships with leading elevator manufacturers and exclusive agencies for premium products and support.',
            descriptionAr: 'علاقات قوية مع الشركات المصنعة الرائدة للمصاعد ووكالات حصرية للمنتجات والدعم المتميز.',
            icon: '🤝'
          },
          {
            title: 'Comprehensive Services',
            titleAr: 'خدمات شاملة',
            description: 'Complete solutions from spare parts supply to installation, maintenance, and modernization services all in one place.',
            descriptionAr: 'حلول كاملة من توريد قطع الغيار إلى التركيب والصيانة وخدمات التحديث كلها في مكان واحد.',
            icon: '⚙️'
          }
        ]
      },
      'contracting': {
        previewImages: ['assets/images/services/contracting2.jpg'],
        projects: [
          {
            id: '1',
            title: 'Development of the Endoscopy Unit – King Fahd Medical City',
            titleAr: 'تطوير وحدة التنظير الداخلي – مدينة الملك فهد الطبية',
            description: 'Comprehensive development and construction of a state-of-the-art endoscopy unit with advanced medical facilities and equipment.',
            descriptionAr: 'تطوير وبناء شامل لوحدة تنظير داخلي متطورة مع مرافق ومعدات طبية متقدمة.',
            image: 'assets/images/contrcting/proj1.jpg'
          },
          {
            id: '2',
            title: 'Expansion of the Medical Imaging Unit at the Main Hospital – King Fahd Medical City',
            titleAr: 'توسيع وحدة التصوير الطبي في المستشفى الرئيسي – مدينة الملك فهد الطبية',
            description: 'Major expansion project enhancing medical imaging capabilities with modern diagnostic equipment and facilities.',
            descriptionAr: 'مشروع توسيع كبير لتعزيز قدرات التصوير الطبي بمعدات ومرافق تشخيصية حديثة.',
            image: 'assets/images/contrcting/proj2.jpg'
          },
          {
            id: '3',
            title: 'Chilled Water and Central Water Network – King Saud University',
            titleAr: 'شبكة المياه المبردة والمياه المركزية – جامعة الملك سعود',
            description: 'Installation and development of comprehensive chilled water and central water distribution network infrastructure.',
            descriptionAr: 'تركيب وتطوير بنية تحتية شاملة لشبكة المياه المبردة وتوزيع المياه المركزية.',
            image: 'assets/images/contrcting/proj3.png'
          },
          {
            id: '4',
            title: 'Expansion of the Inpatient Pharmacy at the College of Medicine Building – King Saud University',
            titleAr: 'توسيع صيدلية المرضى الداخليين في مبنى كلية الطب – جامعة الملك سعود',
            description: 'Expansion and modernization of inpatient pharmacy facilities to enhance healthcare service delivery.',
            descriptionAr: 'توسيع وتحديث مرافق صيدلية المرضى الداخليين لتعزيز تقديم الخدمات الصحية.',
            image: 'assets/images/contrcting/proj4.jpg'
          },
          {
            id: '5',
            title: 'Supply and Installation of Advanced Emergency Centers – Saudi Red Crescent Authority',
            titleAr: 'توريد وتركيب مراكز طوارئ متقدمة – هيئة الهلال الأحمر السعودي',
            description: 'Complete supply and installation of advanced emergency medical centers with cutting-edge equipment.',
            descriptionAr: 'توريد وتركيب كامل لمراكز طوارئ طبية متقدمة بمعدات متطورة.',
            image: 'assets/images/contrcting/proj5.jpg'
          },
          {
            id: '6',
            title: 'Expansion of the Emergency Department at the University Medical City – King Saud University',
            titleAr: 'توسيع قسم الطوارئ في المدينة الطبية الجامعية – جامعة الملك سعود',
            description: 'Major expansion of emergency department facilities to accommodate increased patient capacity and advanced care.',
            descriptionAr: 'توسيع كبير لمرافق قسم الطوارئ لاستيعاب زيادة سعة المرضى والرعاية المتقدمة.',
            image: 'assets/images/contrcting/proj6.png'
          },
          {
            id: '7',
            title: 'Construction of Residential Units for the King Salman Charitable Housing Association – Al-Kharj',
            titleAr: 'بناء وحدات سكنية لجمعية الملك سلمان الخيرية للإسكان – الخرج',
            description: 'Construction of residential housing units to support charitable housing initiatives in Al-Kharj region.',
            descriptionAr: 'بناء وحدات سكنية لدعم مبادرات الإسكان الخيري في منطقة الخرج.',
            image: 'assets/images/contrcting/proj7.jpg'
          },
          {
            id: '8',
            title: 'Construction of the VIP Platform – King Fahd Security College',
            titleAr: 'بناء منصة كبار الشخصيات – كلية الملك فهد الأمنية',
            description: 'Construction of a specialized VIP platform facility for official ceremonies and events.',
            descriptionAr: 'بناء منشأة منصة كبار شخصيات متخصصة للاحتفالات والفعاليات الرسمية.',
            image: 'assets/images/contrcting/proj8.jpg'
          },
          {
            id: '9',
            title: 'Qualifying, Equipping and Completing the Dammam Branch of the Electronic University',
            titleAr: 'تأهيل وتجهيز وإكمال فرع الجامعة الإلكترونية في الدمام',
            description: 'Complete qualification, equipment installation, and finishing works for the electronic university branch facility.',
            descriptionAr: 'تأهيل كامل وتركيب المعدات وأعمال التشطيب لمنشأة فرع الجامعة الإلكترونية.',
            image: 'assets/images/contrcting/proj9.jpg'
          },
          {
            id: '10',
            title: 'Rehabilitation of the Sports and Scouts Area – King Saud University',
            titleAr: 'إعادة تأهيل منطقة الرياضة والكشافة – جامعة الملك سعود',
            description: 'Comprehensive rehabilitation and modernization of sports and scouting facilities and infrastructure.',
            descriptionAr: 'إعادة تأهيل وتحديث شامل لمرافق وبنية تحتية الرياضة والكشافة.',
            image: 'assets/images/contrcting/proj10.png'
          },
          {
            id: '11',
            title: 'Additions and Improvements to the Supply and Logistics Affairs Building in the Riyadh Region – Public Security',
            titleAr: 'إضافات وتحسينات على مبنى شؤون التوريد والخدمات اللوجستية في منطقة الرياض – الأمن العام',
            description: 'Building additions and infrastructure improvements to enhance supply and logistics operations.',
            descriptionAr: 'إضافات مبنى وتحسينات البنية التحتية لتعزيز عمليات التوريد والخدمات اللوجستية.',
            image: 'assets/images/contrcting/proj11.png'
          },
          {
            id: '12',
            title: 'Rehabilitation, Equipping, and Furnishing of the Grand Celebration Hall in Jubail – Saline Water Conversion Corporation',
            titleAr: 'إعادة التأهيل والتجهيز والأثاث لقاعة الاحتفالات الكبرى في الجبيل – المؤسسة العامة لتحلية المياه المالحة',
            description: 'Complete rehabilitation, equipment installation, and furnishing of a grand celebration hall for official events.',
            descriptionAr: 'إعادة تأهيل كاملة وتركيب المعدات وأعمال الأثاث لقاعة احتفالات كبرى للفعاليات الرسمية.',
            image: 'assets/images/contrcting/proj12.png'
          }
        ],
        serviceImages: [
          'assets/images/contrcting/proj11.png',
          'assets/images/contrcting/proj12.png',
          'assets/images/contrcting/proj8.jpg',
        ],
        serviceContent: 'Our contracting sector delivers comprehensive construction and development services across residential, commercial, administrative, and specialized facilities. With First-Class classification, we execute diverse projects for governmental and private sectors, ensuring quality, precision, and timely delivery. Our expertise spans medical facilities, educational institutions, infrastructure development, and specialized construction projects.',
        serviceContentAr: 'يوفر قطاع المقاولات لدينا خدمات بناء وتطوير شاملة عبر المرافق السكنية والتجارية والإدارية والمتخصصة. مع تصنيف الدرجة الأولى، ننفذ مشاريع متنوعة للقطاعات الحكومية والخاصة، مع ضمان الجودة والدقة والتسليم في الوقت المحدد. تمتد خبرتنا عبر المرافق الطبية والمؤسسات التعليمية وتطوير البنية التحتية ومشاريع البناء المتخصصة.',
        serviceSteps: [
          { 
            title: 'Project Planning & Feasibility', 
            titleAr: 'تخطيط المشروع والجدوى', 
            description: 'Comprehensive project planning, feasibility studies, and detailed cost estimation to ensure project viability and success.', 
            descriptionAr: 'تخطيط شامل للمشروع ودراسات الجدوى وتقدير التكلفة التفصيلي لضمان جدوى المشروع ونجاحه.' 
          },
          { 
            title: 'Design & Engineering', 
            titleAr: 'التصميم والهندسة', 
            description: 'Professional architectural design and engineering solutions tailored to project requirements and specifications.', 
            descriptionAr: 'تصميم معماري احترافي وحلول هندسية مصممة وفقاً لمتطلبات ومواصفات المشروع.' 
          },
          { 
            title: 'Construction & Execution', 
            titleAr: 'البناء والتنفيذ', 
            description: 'Quality construction execution with skilled workforce, modern equipment, and adherence to safety standards.', 
            descriptionAr: 'تنفيذ بناء عالي الجودة مع قوة عاملة ماهرة ومعدات حديثة والالتزام بمعايير السلامة.' 
          },
        ],
        clients: [11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
        uniqueFeatures: [
          {
            title: 'First-Class Classification',
            titleAr: 'تصنيف الدرجة الأولى',
            description: 'Recognized First-Class contracting classification demonstrating our capability to handle major projects.',
            descriptionAr: 'تصنيف مقاولات من الدرجة الأولى معترف به يوضح قدرتنا على التعامل مع المشاريع الكبرى.',
            icon: '⭐'
          },
          {
            title: 'Diverse Project Portfolio',
            titleAr: 'محفظة مشاريع متنوعة',
            description: 'Extensive experience across medical facilities, educational institutions, infrastructure, and specialized construction.',
            descriptionAr: 'خبرة واسعة عبر المرافق الطبية والمؤسسات التعليمية والبنية التحتية والبناء المتخصص.',
            icon: '🏗️'
          },
          {
            title: 'Government & Private Sector Expertise',
            titleAr: 'خبرة القطاعين الحكومي والخاص',
            description: 'Proven track record executing projects for both governmental entities and private sector clients.',
            descriptionAr: 'سجل حافل مثبت في تنفيذ المشاريع للجهات الحكومية وعملاء القطاع الخاص.',
            icon: '🤝'
          },
          {
            title: 'Quality & Timely Delivery',
            titleAr: 'الجودة والتسليم في الوقت المحدد',
            description: 'Uncompromising commitment to quality standards and on-schedule project completion.',
            descriptionAr: 'التزام لا يتزعزع بمعايير الجودة وإكمال المشاريع في الوقت المحدد.',
            icon: '⏱️'
          }
        ]
      },
      'next-consulting': {
        previewImages: ['assets/images/services/consulting2.webp'],
        projects: [],
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
        previewImages: ['assets/images/services/investment2.webp'],
        projects: [
          {
            id: '1',
            title: 'Al-Nakheel Master Plan in Al-Jouf',
            titleAr: 'المخطط الرئيسي للنخيل في الجوف',
            description: 'Comprehensive master plan development project for residential and commercial development in Al-Jouf region.',
            descriptionAr: 'مشروع تطوير مخطط رئيسي شامل للتطوير السكني والتجاري في منطقة الجوف.',
            image: 'assets/images/investment/proj1.jpg'
          },
          {
            id: '2',
            title: 'Al-Naseriyah Master Plan in Riyadh',
            titleAr: 'المخطط الرئيسي للناصرية في الرياض',
            description: 'Strategic master plan development for mixed-use community in Riyadh with residential, commercial, and recreational facilities.',
            descriptionAr: 'تطوير مخطط رئيسي استراتيجي لمجتمع متعدد الاستخدامات في الرياض مع مرافق سكنية وتجارية وترفيهية.',
            image: 'assets/images/investment/proj2.jpg'
          },
          {
            id: '3',
            title: 'Al Falah Villas in Riyadh',
            titleAr: 'فلل الفلاح في الرياض',
            description: 'Premium residential villa development project offering luxury living spaces in prime Riyadh location.',
            descriptionAr: 'مشروع تطوير فلل سكنية فاخرة يوفر مساحات معيشة فاخرة في موقع متميز في الرياض.',
            image: 'assets/images/investment/proj3.jpg'
          },
          {
            id: '4',
            title: 'Al-Qaswaa Villas in Al-Madinah Al-Munawwarah',
            titleAr: 'فلل القصواء في المدينة المنورة',
            description: 'Exclusive villa development project in the holy city of Medina, combining modern amenities with cultural heritage.',
            descriptionAr: 'مشروع تطوير فلل حصري في المدينة المقدسة، يجمع بين المرافق الحديثة والتراث الثقافي.',
            image: 'assets/images/investment/proj4.jpg'
          },
          {
            id: '5',
            title: 'Mazarati Tower in Makkah (Mecca)',
            titleAr: 'برج مازيراتي في مكة المكرمة',
            description: 'Iconic high-rise tower development in the holy city of Mecca, featuring luxury residential and commercial spaces.',
            descriptionAr: 'تطوير برج شاهق مميز في المدينة المقدسة مكة، يتميز بمساحات سكنية وتجارية فاخرة.',
            image: 'assets/images/investment/proj5.jpg'
          },
          {
            id: '6',
            title: 'The New Vegetable Market - Unaizah',
            titleAr: 'سوق الخضار الجديد - عنيزة',
            description: 'Modern vegetable market development project providing state-of-the-art trading facilities for agricultural products.',
            descriptionAr: 'مشروع تطوير سوق خضار حديث يوفر مرافق تجارية متطورة للمنتجات الزراعية.',
            image: 'assets/images/investment/proj6.jpg'
          },
          {
            id: '7',
            title: 'Gold Market Project in Medina',
            titleAr: 'مشروع سوق الذهب في المدينة',
            description: 'Specialized gold market development featuring modern retail spaces and trading facilities in Medina.',
            descriptionAr: 'تطوير سوق ذهب متخصص يتميز بمساحات بيع بالتجزئة الحديثة ومرافق تجارية في المدينة.',
            image: 'assets/images/investment/proj7.jpg'
          },
          {
            id: '8',
            title: 'King Khalid Street Project, Medina',
            titleAr: 'مشروع شارع الملك خالد، المدينة',
            description: 'Urban development project along King Khalid Street, enhancing commercial and residential infrastructure.',
            descriptionAr: 'مشروع تطوير حضري على طول شارع الملك خالد، يعزز البنية التحتية التجارية والسكنية.',
            image: 'assets/images/investment/proj8.jpg'
          },
          {
            id: '9',
            title: 'Imam Bukhari Street Project, Medina',
            titleAr: 'مشروع شارع الإمام البخاري، المدينة',
            description: 'Comprehensive street development project improving urban infrastructure and commercial facilities in Medina.',
            descriptionAr: 'مشروع تطوير شارع شامل يحسن البنية التحتية الحضرية والمرافق التجارية في المدينة.',
            image: 'assets/images/investment/proj9.jpg'
          },
          {
            id: '10',
            title: 'Centeria Hotel Riyadh',
            titleAr: 'فندق سنتيريا الرياض',
            description: 'Premium hotel development offering luxury accommodation and hospitality services in the heart of Riyadh.',
            descriptionAr: 'تطوير فندق فاخر يوفر إقامة فاخرة وخدمات ضيافة في قلب الرياض.',
            image: 'assets/images/investment/proj10.png'
          },
          {
            id: '11',
            title: 'Best Western Ajyad Hotel - Makkah',
            titleAr: 'فندق بيست ويسترن أجياد - مكة',
            description: 'International standard hotel development in Mecca, providing exceptional hospitality services for pilgrims and visitors.',
            descriptionAr: 'تطوير فندق بمعايير دولية في مكة، يوفر خدمات ضيافة استثنائية للحجاج والزوار.',
            image: 'assets/images/investment/proj11.png'
          },
          {
            id: '12',
            title: 'Al-Mu\'takif Hotel - Makkah',
            titleAr: 'فندق المعتكف - مكة',
            description: 'Luxury hotel development in Mecca, designed to provide comfortable accommodation during religious seasons.',
            descriptionAr: 'تطوير فندق فاخر في مكة، مصمم لتوفير إقامة مريحة خلال المواسم الدينية.',
            image: 'assets/images/investment/proj12.png'
          },
          {
            id: '13',
            title: 'Maserati Hotel - Makkah',
            titleAr: 'فندق مازيراتي - مكة',
            description: 'Premium hotel development in Mecca, offering world-class hospitality services and luxury amenities.',
            descriptionAr: 'تطوير فندق فاخر في مكة، يقدم خدمات ضيافة عالمية المستوى ومرافق فاخرة.',
            image: 'assets/images/investment/proj13.png'
          },
          {
            id: '14',
            title: 'Best Western Premier Hotel Riyadh',
            titleAr: 'فندق بيست ويسترن بريميير الرياض',
            description: 'Five-star hotel development in Riyadh, featuring premium accommodation, dining, and conference facilities.',
            descriptionAr: 'تطوير فندق خمس نجوم في الرياض، يتميز بإقامة فاخرة ومرافق طعام ومؤتمرات متميزة.',
            image: 'assets/images/investment/proj14.png'
          }
        ],
        serviceImages: [
          'assets/images/investment/proj8.jpg',
          'assets/images/investment/proj14.png',
          'assets/images/investment/proj11.png'
        ],
        serviceContent: 'The Hospitality Sector works to provide the best services in the hospitality industry and development. We specialize in real estate development, hotel management, and comprehensive hospitality services including accommodation, food and beverage, entertainment, events, and tourism logistics. Our investment activities focus on developing land and existing properties, with a proven track record of outstanding projects at the Kingdom level.',
        serviceContentAr: 'يعمل قطاع الضيافة على تقديم أفضل الخدمات في صناعة الضيافة والتطوير. نتخصص في تطوير العقارات وإدارة الفنادق وخدمات الضيافة الشاملة بما في ذلك الإقامة والطعام والشراب والترفيه والفعاليات والخدمات اللوجستية السياحية. تركز أنشطتنا الاستثمارية على تطوير الأراضي والعقارات الموجودة، مع سجل حافل مثبت من المشاريع المتميزة على مستوى المملكة.',
        serviceSteps: [
          { 
            title: 'Management and Provision of Hotel Services', 
            titleAr: 'إدارة وتقديم خدمات الفنادق', 
            description: 'Professional hotel management services ensuring exceptional guest experiences, operational excellence, and brand standards compliance.', 
            descriptionAr: 'خدمات إدارة فنادق احترافية تضمن تجارب ضيوف استثنائية والتميز التشغيلي والامتثال لمعايير العلامة التجارية.' 
          },
          { 
            title: 'Food and Beverage Services', 
            titleAr: 'خدمات الطعام والشراب', 
            description: 'Premium dining experiences with diverse culinary offerings, catering services, and restaurant management across our hospitality portfolio.', 
            descriptionAr: 'تجارب طعام متميزة مع عروض طهي متنوعة وخدمات تقديم الطعام وإدارة المطاعم عبر محفظة الضيافة لدينا.' 
          },
          { 
            title: 'Entertainment Services', 
            titleAr: 'خدمات الترفيه', 
            description: 'Comprehensive entertainment services including recreational facilities, leisure activities, and guest engagement programs.', 
            descriptionAr: 'خدمات ترفيهية شاملة تشمل المرافق الترفيهية والأنشطة الترفيهية وبرامج تفاعل الضيوف.' 
          },
        ],
        clients: [31, 32, 33, 34, 35, 36, 37, 38, 39, 40],
        uniqueFeatures: [
          {
            title: 'Comprehensive Experience',
            titleAr: 'خبرة شاملة',
            description: 'Al Othaim Hospitality is distinguished by its comprehensive experience in providing hospitality services across all sectors of the industry.',
            descriptionAr: 'تتميز ضيافة العثيم بخبرتها الشاملة في تقديم خدمات الضيافة عبر جميع قطاعات الصناعة.',
            icon: '🌟'
          },
          {
            title: 'Investment Capabilities',
            titleAr: 'القدرات الاستثمارية',
            description: 'Strong investment capabilities enable success for the company, the sector, and all our partners through strategic capital deployment.',
            descriptionAr: 'القدرات الاستثمارية القوية تمكن النجاح للشركة والقطاع وجميع شركائنا من خلال نشر رأس المال الاستراتيجي.',
            icon: '💰'
          },
          {
            title: 'Proven Track Record',
            titleAr: 'سجل حافل مثبت',
            description: 'Outstanding projects at the Kingdom level with qualification as a real estate developer by the Ministry of Municipalities and Housing.',
            descriptionAr: 'مشاريع متميزة على مستوى المملكة مع التأهيل كمطور عقاري من قبل وزارة الشؤون البلدية والإسكان.',
            icon: '🏆'
          },
          {
            title: 'Strategic Partnerships',
            titleAr: 'شراكات استراتيجية',
            description: 'Successful partnerships and investments in existing companies, helping businesses finance operations and expansions for mutual growth.',
            descriptionAr: 'شراكات واستثمارات ناجحة في الشركات القائمة، مساعدة الشركات في تمويل العمليات والتوسعات للنمو المتبادل.',
            icon: '🤝'
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
