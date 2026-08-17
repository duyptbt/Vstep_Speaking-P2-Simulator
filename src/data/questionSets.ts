import { QuestionSet } from "../types";

export const QUESTION_SETS: QuestionSet[] = [
  {
    id: "set-1",
    title: "Set 1: Weekend Activity for Friends",
    level: "Target Band B1 & B2 Benchmarks",
    description: "Choosing between camping in the forest, a beach resort, or a cultural city tour.",
    iconName: "Compass",
    question: {
      id: "part2-set-1",
      situationTitle: "Planning a Weekend Trip with Friends",
      situation: "You and your group of close university friends are planning a weekend trip together to celebrate finishing your final exams. Three options are suggested: a camping trip in the forest, a beach resort getaway, or a cultural city tour with museum visits.",
      options: [
        {
          id: "opt-a",
          label: "Option A",
          title: "A Camping Trip in the Forest",
          description: "Camping overnight in a national park with tents, outdoor campfire, and hiking trails.",
          advantages: [
            "Affordable budget suitable for students",
            "Great bonding around the campfire at night",
            "Immersive experience in nature and fresh air"
          ],
          disadvantages: [
            "Requires heavy gear setup and tent preparation",
            "Unpredictable weather and insects/bugs"
          ]
        },
        {
          id: "opt-b",
          label: "Option B",
          title: "A Beach Resort Getaway",
          description: "Staying at a seaside hotel with ocean views, swimming, and fresh seafood dining.",
          advantages: [
            "Extremely relaxing with luxurious amenities",
            "Delicious seafood and swimming activities"
          ],
          disadvantages: [
            "High room rates and expensive expenses during peak season",
            "Crowded beaches during weekends"
          ]
        },
        {
          id: "opt-c",
          label: "Option C",
          title: "A Cultural City Tour & Museum Visit",
          description: "Exploring historical landmarks, art galleries, and historic architecture in a nearby city.",
          advantages: [
            "Enriching cultural knowledge and convenience",
            "Indoor comfort regardless of weather"
          ],
          disadvantages: [
            "Fails to provide a restful break from urban stress",
            "Less thrilling for a young energetic group"
          ]
        }
      ],
      prompt: "Which option do you think is the best choice for your group? Explain your choice and state why you reject the other two options.",
      keywords: [
        "opt for (chọn lựa / nghiêng về)",
        "weigh the pros and cons (cân nhắc kỹ lưỡng ưu nhược điểm)",
        "first and foremost (đầu tiên và quan trọng nhất)",
        "recharge mental batteries (nạp lại năng lượng tinh thần sau kỳ thi)",
        "cost-effective on a tight budget (tiết kiệm chi phí cho ngân sách sinh viên)",
        "strengthen friendship bonds (thắt chặt tình bạn keo sơn gắn bó)",
        "outdoor campfire & star-gazing (lửa trại ngoài trời và ngắm sao)",
        "rule out / eliminate from consideration (loại trừ khỏi sự cân nhắc)",
        "exorbitant accommodation costs (chi phí phòng khách sạn đắt đỏ)",
        "urban routine & congestion (nhịp sống đô thị xô bồ quen thuộc)",
        "all things considered (sau khi cân nhắc mọi khía cạnh tổng thể)"
      ],
      tips: [
        "Step 1 - Introduction & Stance (20s): Paraphrase the celebratory context and state your choice with clear conviction.",
        "Step 2 - In-Depth Justification (70-80s): Develop 2-3 substantial arguments (stress relief in nature, student budget affordability, campfire bonding activities) with concrete details.",
        "Step 3 - Reject Other 2 Options (60-70s): Acknowledge their appeal with concession clauses ('While Option B is luxurious...'), then refute them clearly (exorbitant costs; city tour is too similar to daily urban routine).",
        "Step 4 - Strategic Synthesis & Conclusion (20s): Reaffirm your decision taking into account collective budget and need for relaxation."
      ],
      pronunciationGuide: {
        english: {
          phonetic: "/əˈmʌŋ ðə θriː ˈɒpʃənz prəˈvaɪdɪd, aɪ strɒŋli bɪˈliːv ðæt ə ˈkæmpɪŋ trɪp ɪn ðə ˈfɒrɪst ɪz ðə bɛst ʧɔɪs/",
          intonation: "Use steady assertive tone for main claims, contrastive pitch accents (CAMPING vs RESORT), and transitional fall-rise on concessions.",
          stressAndLinking: "Smoothly link phrases: 'opt_for', 'first_and_foremost', 'rule_it_out', 'all_things_considered'."
        },
        vietnamese: {
          huongDanPhatAm: "Từ 'opt for' phát âm /ɒpt fɔːr/, 'exorbitant' /ɪɡˈzɔː.bɪ.tənt/, 'camaraderie' /ˌkæm.əˈrɑː.dər.i/. Chú ý bật rõ âm đuôi /t/, /d/, /s/.",
          nguDieuVaNhanGiong: "Phân bổ thời lượng chuẩn 3 phút: 20s Mở đầu -> 80s Phân tích 3 điểm mạnh của Camping -> 65s Bác bỏ Resort & City Tour -> 15s Kết luận tổng kết.",
          meoTraLoi: "Nêu rõ đối tượng sinh viên (student budget) và bối cảnh vừa thi xong (stressful exams) để làm cơ sở cho mọi lập luận."
        }
      },
      languageInputB1: {
        targetBand: "B1",
        levelName: "Target Band B1 (Intermediate 4.0 - 5.5 | ~250 words for 2.0 - 2.5 mins)",
        levelGoal: "Cung cấp vốn từ vựng và cấu trúc câu rõ ràng, mạch lạc, dễ nhớ, giúp thí sinh nói liên tục trong 2 - 2.5 phút với cấu trúc 4 phần chuẩn chỉ không ngập ngừng.",
        vocabulary: [
          { phrase: "go on a camping trip in the forest", meaningVi: "đi cắm trại dã ngoại trong rừng", type: "Chủ đề chính" },
          { phrase: "suitable for our student budget", meaningVi: "phù hợp với túi tiền sinh viên của chúng tôi", type: "Lý do lựa chọn" },
          { phrase: "do not have much spare money", meaningVi: "không có nhiều tiền dư dả", type: "Thực tế sinh viên" },
          { phrase: "breathe fresh forest air", meaningVi: "hít thở không khí trong lành của rừng", type: "Lợi ích sức khỏe" },
          { phrase: "set up tents & hike on trails", meaningVi: "dựng lều và đi bộ đường mòn", type: "Hoạt động ngoài trời" },
          { phrase: "cook around a campfire", meaningVi: "nấu nướng quanh đống lửa trại", type: "Hoạt động gắn kết" },
          { phrase: "become closer friends", meaningVi: "trở nên thân thiết và gắn bó hơn", type: "Lợi ích tình bạn" },
          { phrase: "create strong friendship bonds", meaningVi: "tạo nên sự gắn kết tình bạn bền chặt", type: "Lợi ích lâu dài" },
          { phrase: "luxury rooms are very expensive", meaningVi: "phòng khách sạn cao cấp rất đắt đỏ", type: "Lý do bác bỏ Resort" },
          { phrase: "heavy financial burden", meaningVi: "gánh nặng tài chính nặng nề", type: "Lý do bác bỏ" },
          { phrase: "live and study in the city every day", meaningVi: "sống và học tập trong thành phố mỗi ngày", type: "Lý do bác bỏ City Tour" },
          { phrase: "feel boring / not like a holiday", meaningVi: "cảm thấy nhàm chán / không giống kỳ nghỉ thực thụ", type: "Lý do bác bỏ" }
        ],
        transitionPhrases: [
          "In my opinion, ... is the best choice for our group of university friends after finishing our final exams.",
          "First, ... is very affordable and suitable for our student budget because ...",
          "Second, staying in nature helps us relax and ...",
          "Next, I do not choose the beach resort getaway because ...",
          "Also, I reject the cultural city tour and museum visits because ...",
          "In conclusion, ... is the most fun, refreshing, and budget-friendly choice for our group."
        ],
        sentenceFrames: [
          {
            stage: "1. Mở bài & Khẳng định lựa chọn (Opening & Stance ~20s)",
            templates: [
              "In my opinion, going on a camping trip in the forest is the best choice for our group of university friends after finishing our final exams.",
              "If I have to choose among the three options to celebrate our exam success, I will definitely choose Option A: a camping trip in the forest."
            ]
          },
          {
            stage: "2. Triển khai 2-3 lý do chọn chi tiết (Supporting Reasons ~75s)",
            templates: [
              "First, camping is very affordable and suitable for our student budget. Because we are university students, we do not have much spare money, so renting tents and sharing food is very cheap.",
              "Second, staying in nature helps us relax and become closer friends. After many stressful weeks studying, we can breathe fresh forest air, set up tents together, cook around a warm campfire, and sing songs under the stars."
            ]
          },
          {
            stage: "3. Bác bỏ 2 lựa chọn còn lại có phân tích (Rejecting Alternatives ~65s)",
            templates: [
              "Next, I do not choose the beach resort getaway because luxury hotel rooms and seafood restaurants there are very expensive during weekends, creating a heavy financial burden for students.",
              "Also, I reject the cultural city tour and museum visits because we already live and study in the busy city every day, so walking through noisy streets will feel boring and not like a real holiday."
            ]
          },
          {
            stage: "4. Kết luận tổng hợp (Conclusion ~20s)",
            templates: [
              "In conclusion, a camping trip in the forest is the most fun, refreshing, and budget-friendly choice for our group to celebrate our success."
            ]
          }
        ],
        responseFormula: [
          "Bước 1 (0:00 - 0:20): Nêu lựa chọn trực tiếp gắn với bối cảnh thi cử: 'In my opinion, going on a camping trip in the forest is the best choice for our group of university friends after finishing our final exams.'",
          "Bước 2 (0:20 - 1:35): Khai triển 2 luận điểm lớn: Chi phí sinh viên hợp lý (tiền lều, tự nấu ăn) + Hoạt động thư giãn thiên nhiên và gắn kết bên lửa trại (dựng lều, hát ca, tâm sự).",
          "Bước 3 (1:35 - 2:40): Bác bỏ Resort (phòng đắt, ăn hải sản tốn kém, tạo gánh nặng tiền bạc) và City Tour (ở thành phố suốt ngày, đi bảo tàng nhàm chán không có tính xả stress).",
          "Bước 4 (2:40 - 3:00): Chốt lại bằng câu kết luận tổng hòa: 'In conclusion, a camping trip in the forest is the most fun, refreshing, and budget-friendly choice for our group.'"
        ],
        pronunciationGuide: {
          phonetics: "/ɪn maɪ əˈpɪnjən, ˈkæmpɪŋ ɪn ðə ˈfɒrɪst ɪz ðə bɛst ʧɔɪs fɔːr aʊər ɡruːp/",
          intonation: "Lên giọng nhẹ ở các từ nối (First↗, Second↗, Next↗) và hạ giọng dứt khoát ở cuối câu khẳng định.",
          stressAndLinking: "Phát âm rõ các âm cuối: 'budget', 'forest', 'tents', 'expensive', 'burden', 'students'.",
          vietnameseAdvice: "Duy trì tốc độ 100-115 từ/phút với nhịp thở đều. Dùng các câu ghép có từ nối 'because', 'so', 'and' để kéo dài thời lượng tự nhiên mà không sợ sai ngữ pháp."
        }
      },
      languageInputB2: {
        targetBand: "B2",
        levelName: "Target Band B2 (Upper-Intermediate 6.0 - 8.0 | ~370 words for 2.5 - 3.0 mins)",
        levelGoal: "Sử dụng hệ thống Collocations học thuật cao cấp, cấu trúc câu phức đa mệnh đề (nhượng bộ, điều kiện giả định, phân từ), phản biện đa chiều và khả năng làm chủ trọn vẹn 3 phút thi.",
        vocabulary: [
          { phrase: "opt for / strongly advocate for", meaningVi: "lựa chọn / ủng hộ mạnh mẽ phương án", type: "Advanced Verb" },
          { phrase: "weigh the pros and cons meticulously", meaningVi: "cân nhắc kỹ lưỡng từng mặt lợi hại", type: "Idiom" },
          { phrase: "recharge our mental batteries", meaningVi: "nạp lại năng lượng tinh thần sau kỳ thi căng thẳng", type: "Collocation" },
          { phrase: "cost-effective on a tight student budget", meaningVi: "hiệu quả chi phí cho ngân sách sinh viên eo hẹp", type: "Collocation" },
          { phrase: "fosters authentic camaraderie", meaningVi: "thúc đẩy tình đồng chí / tình bạn chân thành sâu sắc", type: "Academic Collocation" },
          { phrase: "strengthen our friendship bonds", meaningVi: "thắt chặt tình bạn keo sơn gắn bó", type: "Collocation" },
          { phrase: "rule out / eliminate from consideration", meaningVi: "loại trừ dứt khoát khỏi sự cân nhắc", type: "Phrasal Verb" },
          { phrase: "exorbitant accommodation costs", meaningVi: "chi phí phòng khách sạn đắt đỏ ngất ngưởng", type: "Advanced Noun Phrase" },
          { phrase: "pose a severe financial burden", meaningVi: "gây nên gánh nặng tài chính nghiêm trọng", type: "Collocation" },
          { phrase: "reminiscent of our daily academic routine", meaningVi: "quá giống với nhịp sống học đường thường nhật", type: "Academic Phrase" },
          { phrase: "restorative escape from urban chaos", meaningVi: "chuyến trốn chạy phục hồi sức khỏe khỏi sự ồn ào đô thị", type: "Noun Phrase" },
          { phrase: "all things considered", meaningVi: "sau khi cân nhắc mọi khía cạnh tổng thể", type: "Discourse Marker" }
        ],
        transitionPhrases: [
          "Among the three options provided, I strongly believe that ... is the optimal choice for our group of university friends.",
          "First and foremost, after an exhausting semester filled with ..., immersing ourselves in nature offers a wonderful way to ...",
          "Moreover, ... is exceptionally cost-effective for university students who typically operate on ...",
          "Furthermore, outdoor camping fosters ... by ...",
          "On the other hand, I would firmly rule out ... primarily due to ..., which would pose a ...",
          "Similarly, I find ... far less appealing because ..., failing to provide a ...",
          "All things considered, taking into account our collective budget, desire for adventure, and need to unwind, ... is unquestionably the most balanced and rewarding option."
        ],
        sentenceFrames: [
          {
            stage: "1. Sophisticated Opening & Clear Thesis (~20s)",
            templates: [
              "Among the three options provided, I strongly believe that a camping trip in the forest is the optimal choice for our group of university friends to celebrate finishing our final exams.",
              "If I were faced with this collective decision, I would unequivocally opt for Option A: an outdoor camping excursion in the forest."
            ]
          },
          {
            stage: "2. Comprehensive 3-Pillar Justification (~80s)",
            templates: [
              "First and foremost, after an exhausting semester of final exams and prolonged screen exposure, immersing ourselves in nature offers a wonderful way to decompress and recharge our mental batteries.",
              "Moreover, camping is exceptionally cost-effective for university students who typically operate on a tight budget. By pitching our own tents and sharing communal meals, expenses remain fully manageable.",
              "Furthermore, outdoor camping fosters authentic camaraderie. Working collaboratively to pitch tents, preparing campfire meals, and stargazing together will surely strengthen our friendship bonds."
            ]
          },
          {
            stage: "3. Strategic Concession & Counter-Refutation (~65s)",
            templates: [
              "On the other hand, I would firmly rule out the beach resort getaway. Although luxury coastal amenities are undeniably tempting, the exorbitant accommodation costs during peak season would pose a severe financial burden for many students.",
              "Similarly, I find the cultural city tour far less appealing. Given that we already reside in an urban metropolis, wandering through crowded museums feels too reminiscent of our daily routine rather than a true restorative escape."
            ]
          },
          {
            stage: "4. Nuanced Synthesis & Closing Recommendation (~15s)",
            templates: [
              "All things considered, taking into account our collective budget, desire for adventure, and need to unwind, the forest camping trip is unquestionably the most balanced and rewarding option for our celebration."
            ]
          }
        ],
        responseFormula: [
          "Bước 1 (0:00 - 0:20): Paraphrase đề bài trang trọng, dùng stance marker dứt khoát ('Among the three options provided, I strongly believe that Option A is the optimal choice...').",
          "Bước 2 (0:20 - 1:40): Phân tích sâu 3 trụ cột: (1) Sức khỏe tinh thần ('recharge mental batteries'), (2) Kinh tế sinh viên ('cost-effective on a tight budget'), (3) Tình bạn đồng đội ('fosters authentic camaraderie, strengthens friendship bonds').",
          "Bước 3 (1:40 - 2:45): Phản biện nâng cao dùng mệnh đề nhượng bộ: Resort (dù hấp dẫn nhưng 'exorbitant accommodation costs' tạo 'severe financial burden') và City Tour ('reminiscent of daily routine', không phải 'restorative escape').",
          "Bước 4 (2:45 - 3:00): Chốt hạ toàn diện bằng 'All things considered, taking into account our collective budget... Option A is unquestionably the most suitable option.'"
        ],
        pronunciationGuide: {
          phonetics: "/əˈmʌŋ ðə θriː ˈɒpʃənz prəˈvaɪdɪd, aɪ strɒŋli bɪˈliːv ðæt ə ˈkæmpɪŋ trɪp ɪn ðə ˈfɒrɪst ɪz ði ˈɒptɪməl ʧɔɪs/",
          intonation: "Sử dụng Fall-Rise intonation ở các mệnh đề chuyển tiếp và nhượng bộ (Although staying in a luxury resort is tempting↗, its exorbitant costs...↘). Nhấn trọng âm tương phản (CAMPING vs RESORT).",
          stressAndLinking: "Liaisons tự nhiên: 'opt_for', 'first_and_foremost', 'rule_it_out', 'unquestionably_the_most'. Giảm nhẹ các hư từ (weak forms: /əv/, /fɔːr/).",
          vietnameseAdvice: "Nhấn chuẩn trọng âm từ đa âm tiết (exORbitant, caMAraderie, reMINiscent, unQUESstionably). Duy trì phong thái tự tin, rành mạch và làm chủ tốc độ nói 130-145 từ/phút."
        }
      },
      modelAnswerB1: "In my opinion, going on a camping trip in the forest is the best choice for our group of university friends after finishing our final exams.\n\nFirst, camping is very affordable and suitable for our student budget. Because we are university students, we do not have much spare money. Renting tents and bringing our own food to cook is very cheap, so everyone in our group can participate without worrying about high expenses.\n\nSecond, staying in nature helps us relax and become closer friends. After many stressful weeks studying for exams, we can breathe fresh forest air, set up tents together, and hike on mountain trails. At night, we can sit around a warm campfire, grill food, sing songs, and talk about our memories. This will create strong friendship bonds and give us wonderful memories.\n\nNext, I do not choose the beach resort getaway because luxury hotel rooms and seafood restaurants there are very expensive, especially during the weekend peak season. It is too costly for students and would place a heavy financial burden on us.\n\nAlso, I reject the cultural city tour and museum visits. We already live and study in a busy city every day, so walking through noisy streets and crowded museums will feel boring and will not feel like an exciting holiday.\n\nIn conclusion, a camping trip in the forest is the most fun, refreshing, and budget-friendly choice for our group to celebrate our success.",
      modelAnswerB2: "Among the three options provided, I strongly believe that a camping trip in the forest is the optimal choice for our group of university friends to celebrate finishing our final exams.\n\nFirst and foremost, after an exhausting semester filled with intense exam revision and prolonged screen exposure, immersing ourselves in nature offers a wonderful way to decompress and recharge our mental batteries. Exploring forest trails, breathing pristine mountain air, and escaping urban pollution will revitalize our well-being and clear our minds.\n\nMoreover, camping is exceptionally cost-effective for university students who typically operate on a tight budget. By pitching our own tents, sharing communal cooking duties, and splitting campsite entrance fees, the total expenditure remains entirely manageable for every single member of our group without causing financial strain.\n\nFurthermore, outdoor camping fosters authentic camaraderie. Working collaboratively to pitch tents, preparing barbecue meals around a glowing campfire, and sharing intimate conversations under the stars will undoubtedly strengthen our friendship bonds and create enduring memories that last a lifetime.\n\nOn the other hand, I would firmly rule out the beach resort getaway. Although staying in a beachfront hotel with luxurious amenities is undeniably tempting, the exorbitant accommodation costs and inflated seafood prices during peak weekends would pose a severe financial burden. Additionally, crowded commercial beaches offer little tranquility.\n\nSimilarly, I find the cultural city tour and museum visits far less appealing. Given that we already reside in an urban metropolis, wandering through historical landmarks and congested streets feels too reminiscent of our daily academic routine rather than a genuine restorative escape.\n\nAll things considered, taking into account our collective budget, desire for adventure, and need to unwind, the forest camping trip is unquestionably the most balanced and rewarding option for our celebratory excursion.",
      modelAnswer: "Among the three options provided, I strongly believe that a camping trip in the forest is the optimal choice for our group of university friends to celebrate finishing our final exams.\n\nFirst and foremost, after an exhausting semester filled with intense exam revision and prolonged screen exposure, immersing ourselves in nature offers a wonderful way to decompress and recharge our mental batteries. Exploring forest trails, breathing pristine mountain air, and escaping urban pollution will revitalize our well-being and clear our minds.\n\nMoreover, camping is exceptionally cost-effective for university students who typically operate on a tight budget. By pitching our own tents, sharing communal cooking duties, and splitting campsite entrance fees, the total expenditure remains entirely manageable for every single member of our group without causing financial strain.\n\nFurthermore, outdoor camping fosters authentic camaraderie. Working collaboratively to pitch tents, preparing barbecue meals around a glowing campfire, and sharing intimate conversations under the stars will undoubtedly strengthen our friendship bonds and create enduring memories that last a lifetime.\n\nOn the other hand, I would firmly rule out the beach resort getaway. Although staying in a beachfront hotel with luxurious amenities is undeniably tempting, the exorbitant accommodation costs and inflated seafood prices during peak weekends would pose a severe financial burden. Additionally, crowded commercial beaches offer little tranquility.\n\nSimilarly, I find the cultural city tour and museum visits far less appealing. Given that we already reside in an urban metropolis, wandering through historical landmarks and congested streets feels too reminiscent of our daily academic routine rather than a genuine restorative escape.\n\nAll things considered, taking into account our collective budget, desire for adventure, and need to unwind, the forest camping trip is unquestionably the most balanced and rewarding option for our celebratory excursion.",
      modelAnswerPhonetics: "/əˈmʌŋ ðə θriː ˈɒpʃənz prəˈvaɪdɪd, aɪ strɒŋli bɪˈliːv ðæt ə ˈkæmpɪŋ trɪp ɪn ðə ˈfɒrɪst ɪz ði ˈɒptɪməl ʧɔɪs/"
    }
  },
  {
    id: "set-2",
    title: "Set 2: Travel Transport for Class Trip",
    level: "Target Band B1 & B2 Benchmarks",
    description: "Selecting transport to a mountain town 200 km away: private coach bus, motorbikes, or express train.",
    iconName: "Truck",
    question: {
      id: "part2-set-2",
      situationTitle: "Selecting Transport for a Large Class Trip",
      situation: "Your university class of 30 students is planning a 3-day excursion to a mountain city located 200 kilometers away. Three modes of transportation are proposed: hiring a private 35-seat coach bus, traveling together in a motorbike convoy, or taking the scenic express train.",
      options: [
        {
          id: "opt-2a",
          label: "Option A",
          title: "Hiring a Private Coach Bus",
          description: "Renting a dedicated air-conditioned 35-seater bus with a professional driver from school to hotel.",
          advantages: [
            "Safe, comfortable, and direct door-to-door transportation",
            "Ample luggage storage for 30 students",
            "Group stays together for singing and fun on the way"
          ],
          disadvantages: [
            "Fixed departure schedule with limited spontaneous stops",
            "Higher rental cost divided among the class"
          ]
        },
        {
          id: "opt-2b",
          label: "Option B",
          title: "Riding Motorbikes in a Convoy",
          description: "Pairing up on 15 motorbikes to ride along the scenic highway and mountain passes.",
          advantages: [
            "Exciting adventure with freedom to stop anywhere for photos",
            "Lower fuel cost per individual student"
          ],
          disadvantages: [
            "Severe traffic safety risks on steep mountain roads",
            "Tiring over 200 km, especially in bad weather or rain"
          ]
        },
        {
          id: "opt-2c",
          label: "Option C",
          title: "Taking the Scenic Express Train",
          description: "Boarding the regional train with scenic mountain views along the railway line.",
          advantages: [
            "Safe, relaxing, and scenic travel experience",
            "Clean restrooms and dining cart onboard"
          ],
          disadvantages: [
            "Train station is 15 km away from the final mountain hotel",
            "Requires extra taxi/shuttle transfers and additional expense"
          ]
        }
      ],
      prompt: "Which mode of transport is the most suitable for the class? Give reasons for your choice and explain why the other options are rejected.",
      keywords: [
        "recommend without hesitation (khuyên chọn không chút đắn đo)",
        "passenger safety is paramount (an toàn của hành khách là tối quan trọng)",
        "door-to-door transportation (vận chuyển tận nơi đón trả)",
        "spacious luggage compartments (khoang hành lý rộng rãi tiện nghi)",
        "air-conditioned vehicle (xe có điều hòa mát mẻ tiện nghi)",
        "advise strongly against (khuyên can kịch liệt không nên)",
        "steep winding mountain passes (đèo núi quanh co hiểm trở)",
        "severe safety hazards (nguy cơ an toàn nghiêm trọng)",
        "extra transfer fees & taxi hassle (chi phí trung chuyển phát sinh và bất tiện taxi)",
        "strike the perfect balance (đạt được sự cân bằng hoàn hảo)",
        "collective excursion & class unity (chuyến dã ngoại tập thể và sự đoàn kết lớp)"
      ],
      tips: [
        "Step 1 - Choice & Context (20s): State your choice with conviction for 30 students traveling 200 km ('If I were tasked with making the decision for our 30-student class excursion, I would recommend hiring a private coach bus...').",
        "Step 2 - In-Depth Justification (70-80s): Highlight passenger safety with professional driver, spacious luggage capacity for 30 suitcases, and door-to-door convenience fostering group bonding on the bus.",
        "Step 3 - Reject Motorbike Convoy & Train (60-70s): Point out severe hazards of 200 km steep mountain passes on motorbikes; explain train station is 15 km away from hotel causing taxi hassle and cost.",
        "Step 4 - Strategic Synthesis & Conclusion (20s): Reaffirm coach bus as the safest, most unified, and stress-free option for the entire class."
      ],
      pronunciationGuide: {
        english: {
          phonetic: "/ɪf aɪ wɜː ˈtɑːskt wɪð ˈmeɪkɪŋ ðə dɪˈsɪʒən... aɪ wʊd ˌrɛkəˈmɛnd ˈhaɪərɪŋ ə ˈpraɪvɪt ˈθɜːti faɪv siːt kəʊʧ bʌs/",
          intonation: "Maintain steady authoritative intonation on safety justifications; use contrastive pitch drops when ruling out risky motorbikes.",
          stressAndLinking: "Emphasize multi-syllable key words: 'PAR-a-mount', 'CON-voy', 'EX-cur-sion'. Link 'coach_bus', 'door_to_door', 'strike_the_perfect_balance'."
        },
        vietnamese: {
          huongDanPhatAm: "Từ 'paramount' phát âm /ˈpær.ə.maʊnt/, 'compartment' /kəmˈpɑːt.mənt/, 'convoy' /ˈkɒn.vɔɪ/, 'excursion' /ɪkˈskɜː.ʃən/.",
          nguDieuVaNhanGiong: "Phân bổ 3 phút: 20s Mở bài -> 80s Phân tích an toàn, tiện nghi và gắn kết của Xe Khách -> 65s Bác bỏ Xe máy (nguy hiểm đèo dốc) & Tàu hỏa (ga cách 15km) -> 15s Kết luận.",
          meoTraLoi: "Nhấn mạnh số lượng 30 sinh viên và quãng đường 200km đèo núi để làm đòn bẩy lập luận áp đảo cho xe khách."
        }
      },
      languageInputB1: {
        targetBand: "B1",
        levelName: "Target Band B1 (Intermediate 4.0 - 5.5 | ~255 words for 2.0 - 2.5 mins)",
        levelGoal: "Cung cấp từ vựng cụ thể về phương tiện đi lại, lý do an toàn, tiện ích tập thể và từ nối mạch lạc, giúp duy trì câu trả lời 2.0 - 2.5 phút không ngắt quãng.",
        vocabulary: [
          { phrase: "hire a private coach bus", meaningVi: "thuê một chiếc xe khách riêng", type: "Chủ đề chính" },
          { phrase: "very safe and comfortable", meaningVi: "rất an toàn và thoải mái", type: "Lý do lựa chọn" },
          { phrase: "35-seat air-conditioned bus", meaningVi: "xe 35 chỗ có máy lạnh mát mẻ", type: "Phương tiện" },
          { phrase: "ample luggage space for 30 bags", meaningVi: "khoang hành lý rộng rãi cho 30 vali", type: "Tiện ích" },
          { phrase: "experienced professional driver", meaningVi: "bác tài xế chuyên nghiệp giàu kinh nghiệm", type: "Yếu tố an toàn" },
          { phrase: "direct door-to-door transportation", meaningVi: "đưa đón tận nơi từ trường đến khách sạn", type: "Tiện ích di chuyển" },
          { phrase: "play games and sing together", meaningVi: "chơi trò chơi và hát hò cùng nhau", type: "Gắn kết lớp" },
          { phrase: "extremely dangerous on mountain passes", meaningVi: "cực kỳ nguy hiểm trên các cung đường đèo núi", type: "Lý do bác bỏ xe máy" },
          { phrase: "heavy rain and dense fog", meaningVi: "mưa to và sương mù dày đặc", type: "Rủi ro thời tiết" },
          { phrase: "breaks down / causes trouble", meaningVi: "bị hỏng hóc / gây rắc rối", type: "Rủi ro xe cộ" },
          { phrase: "located 15 kilometers away", meaningVi: "nằm cách xa 15 km", type: "Lý do bác bỏ tàu hỏa" },
          { phrase: "waste time and pay extra taxi money", meaningVi: "lãng phí thời gian và tốn thêm tiền taxi", type: "Lý do bác bỏ" }
        ],
        transitionPhrases: [
          "If I have to choose the best mode of transportation for our class trip of 30 students, I would definitely choose hiring a private coach bus.",
          "First, traveling by coach bus is very safe and comfortable because ...",
          "Second, the coach bus provides direct door-to-door transportation from our university straight to the hotel ...",
          "Next, I strongly disagree with traveling by motorbike convoy because ...",
          "Finally, I do not choose the scenic express train because ...",
          "In summary, renting a private coach bus is the safest, most convenient, and most united transport option for our class trip."
        ],
        sentenceFrames: [
          {
            stage: "1. Mở bài & Khẳng định lựa chọn (Opening & Choice ~20s)",
            templates: [
              "If I have to choose the best mode of transportation for our class trip of 30 students to the mountain city, I would definitely choose hiring a private coach bus.",
              "In my opinion, renting an air-conditioned coach bus is the most suitable transport for our large class."
            ]
          },
          {
            stage: "2. Triển khai 2 lý do an toàn & tiện lợi (Supporting Reasons ~75s)",
            templates: [
              "First, traveling by coach bus is very safe and comfortable. We have 30 people, so a 35-seat bus ensures everyone has a comfortable seat with ample luggage space, and an experienced driver will drive safely.",
              "Second, the coach bus provides direct door-to-door transportation from our school to the hotel, and our whole class can sit together, play games, and sing songs during the 200-kilometer trip."
            ]
          },
          {
            stage: "3. Bác bỏ Xe máy & Tàu hỏa chi tiết (Rejecting Alternatives ~65s)",
            templates: [
              "Next, I strongly disagree with traveling by motorbike convoy because riding 200 kilometers along steep mountain passes is extremely dangerous for students if there is heavy rain or fog.",
              "Finally, I do not choose the express train because the train station is located 15 kilometers away from our hotel, meaning 30 students with heavy luggage must hire multiple taxis, wasting time and money."
            ]
          },
          {
            stage: "4. Kết luận tổng hợp (Conclusion ~20s)",
            templates: [
              "In summary, renting a private coach bus is the safest, most convenient, and most united transport option for our class trip."
            ]
          }
        ],
        responseFormula: [
          "Bước 1 (0:00 - 0:20): Nêu lựa chọn trực tiếp: 'If I have to choose the best mode of transportation for our class trip of 30 students, I would definitely choose hiring a private coach bus.'",
          "Bước 2 (0:20 - 1:35): Khai triển 2 ưu điểm lớn: An toàn tuyệt đối (tài xế chuyên nghiệp, khoang chứa 30 vali) + Tuyến đường đón trả tận nơi giúp lớp hát hò, gắn kết trên xe.",
          "Bước 3 (1:35 - 2:40): Bác bỏ Xe máy (đèo dốc 200km nguy hiểm, mưa gió sương mù) và Tàu hỏa (ga cách khách sạn 15km, 30 người vác hành lý đi taxi rất tốn kém và mệt mỏi).",
          "Bước 4 (2:40 - 3:00): Kết luận tóm gọn: 'In summary, renting a private coach bus is the safest, most convenient, and most united transport option for our class trip.'"
        ],
        pronunciationGuide: {
          phonetics: "/ɪf aɪ hæv tuː ʧuːz... aɪ wʊd ˈdɛfɪnɪtli ʧuːz ˈhaɪərɪŋ ə ˈpraɪvɪt kəʊʧ bʌs/",
          intonation: "Hạ giọng ở cuối các câu khẳng định lý do, lên giọng nhẹ ở từ nối (First↗, Second↗, Next↗).",
          stressAndLinking: "Phát âm rõ âm cuối /ʧ/ trong 'coach', âm /s/ trong 'bus', 'students', 'dangerous', 'suitcases'.",
          vietnameseAdvice: "Nói rõ từng cụm từ, giữ nhịp thở đều 105-120 từ/phút để hoàn thành trọn vẹn 2.0 - 2.5 phút."
        }
      },
      languageInputB2: {
        targetBand: "B2",
        levelName: "Target Band B2 (Upper-Intermediate 6.0 - 8.0 | ~375 words for 2.5 - 3.0 mins)",
        levelGoal: "Phát triển lập luận đa chiều với từ vựng quản trị rủi ro & hậu cần cao cấp, cấu trúc tương phản sắc sảo và khả năng duy trì lưu loát trọn vẹn 3 phút.",
        vocabulary: [
          { phrase: "recommend without hesitation", meaningVi: "khuyên chọn không chút đắn đo do dự", type: "Collocation" },
          { phrase: "passenger safety is of paramount importance", meaningVi: "an toàn của hành khách là yếu tố tối quan trọng hàng đầu", type: "Idiom / Phrase" },
          { phrase: "seamless door-to-door transportation", meaningVi: "vận tải đón trả tận nơi thông suốt liền mạch", type: "Collocation" },
          { phrase: "spacious luggage compartments", meaningVi: "khoang hành lý rộng rãi tiện nghi", type: "Noun Phrase" },
          { phrase: "licensed professional driver", meaningVi: "tài xế chuyên nghiệp có chứng chỉ", type: "Noun Phrase" },
          { phrase: "strongly advise against", meaningVi: "kịch liệt khuyên can không nên chọn", type: "Collocation" },
          { phrase: "steep winding mountain passes", meaningVi: "những cung đường đèo quanh co dốc hiểm trở", type: "Collocation" },
          { phrase: "pose severe safety hazards", meaningVi: "tiềm ẩn hiểm họa khôn lường về an toàn", type: "Collocation" },
          { phrase: "disembarking with heavy baggage", meaningVi: "xuống tàu với hành lý cồng kềnh", type: "Collocation" },
          { phrase: "incur substantial extra transfer fees", meaningVi: "làm phát sinh chi phí trung chuyển đáng kể", type: "Collocation" },
          { phrase: "strike the perfect balance", meaningVi: "đạt được sự cân bằng tối ưu giữa tiện nghi và an toàn", type: "Idiom" },
          { phrase: "collective excursion & group cohesion", meaningVi: "chuyến dã ngoại tập thể và sự gắn kết lớp", type: "Formal Phrase" }
        ],
        transitionPhrases: [
          "If I were tasked with making the collective decision for our 30-student class excursion, I would recommend ... without any hesitation.",
          "First of all, when organizing travel for a large cohort of 30 young adults over a distance of 200 kilometers, ... is of paramount importance.",
          "Furthermore, a private charter provides ... straight to ..., which eliminates ... and keeps ...",
          "In sharp contrast, I must strongly advise against ... because ... poses severe safety hazards ...",
          "As for the scenic express train, while it is undeniably ..., its logistical drawbacks are significant because ...",
          "All things considered, ... strikes the perfect balance between uncompromising safety, logistical convenience, and class unity."
        ],
        sentenceFrames: [
          {
            stage: "1. Stance & Strategic Opening (~20s)",
            templates: [
              "If I were tasked with making the collective decision for our 30-student class excursion, I would recommend hiring a private 35-seat coach bus without any hesitation.",
              "Given that we are organizing a 200-kilometer excursion for 30 students, Option A stands out as the most rational and dependable choice."
            ]
          },
          {
            stage: "2. Rigorous Multi-Point Justification (~80s)",
            templates: [
              "First of all, when organizing travel for 30 students over 200 kilometers, passenger safety is of paramount importance, and a licensed professional driver guarantees optimal peace of mind.",
              "Furthermore, a private coach provides seamless door-to-door transportation directly from campus to our hotel lobby, while allowing all 30 classmates to socialize and bond on board."
            ]
          },
          {
            stage: "3. Detailed Counter-Refutation (~65s)",
            templates: [
              "In sharp contrast, I must strongly advise against riding motorbikes in a convoy. Navigating 200 kilometers of steep mountain passes poses severe hazards for inexperienced students exposed to bad weather.",
              "As for the scenic express train, while it is undeniably picturesque, the terminal is situated 15 kilometers away, incurring substantial extra taxi transfer fees and causing major logistical confusion."
            ]
          },
          {
            stage: "4. Balanced Synthesis (~15s)",
            templates: [
              "All things considered, the private coach bus strikes the perfect balance between uncompromising safety, logistical convenience, and class unity, making it the undisputed superior choice."
            ]
          }
        ],
        responseFormula: [
          "Bước 1 (0:00 - 0:20): Khởi đầu tự tin với câu điều kiện giả định trang trọng ('If I were tasked with making the collective decision for our 30-student class excursion, I would recommend...').",
          "Bước 2 (0:20 - 1:40): Khai triển sâu 2 trụ cột an toàn & hậu cần tập thể ('passenger safety is of paramount importance', 'seamless door-to-door transportation', 'spacious luggage compartments').",
          "Bước 3 (1:40 - 2:45): Bác bỏ sắc bén: Xe máy ('severe safety hazards on steep mountain passes') và Tàu hỏa (ga xa 15km, 'disembarking with heavy baggage', 'incur substantial transfer fees').",
          "Bước 4 (2:45 - 3:00): Chốt hạ bằng thành ngữ B2 đắt giá ('strikes the perfect balance between uncompromising safety, logistical convenience, and class unity')."
        ],
        pronunciationGuide: {
          phonetics: "/ɪf aɪ wɜː ˈtɑːskt wɪð ˈmeɪkɪŋ ðə dɪˈsɪʒən... aɪ wʊd ˌrɛkəˈmɛnd ˈhaɪərɪŋ ə ˈpraɪvɪt kəʊʧ bʌs/",
          intonation: "Sử dụng ngữ điệu đĩnh đạc, nhấn mạnh vào các từ trọng tâm biểu thị mức độ (PAR-a-mount, se-VERE, un-DIS-pu-ted-ly).",
          stressAndLinking: "Luyện phát âm nối âm mượt mà: 'strike_the_perfect_balance', 'door_to_door', 'without_any_hesitation'.",
          vietnameseAdvice: "Tập trung thể hiện phong thái thuyết trình trưởng thành, rành mạch và có chiều sâu lập luận với tốc độ 130-145 từ/phút."
        }
      },
      modelAnswerB1: "If I have to choose the best mode of transportation for our class trip of 30 students to the mountain city, I would definitely choose hiring a private coach bus.\n\nFirst, traveling by coach bus is very safe and comfortable. We have a large group of 30 people, so renting an air-conditioned 35-seat bus ensures everyone has a comfortable seat with ample luggage space for all our bags. Having an experienced professional driver allows us to travel safely without worrying about driving ourselves.\n\nSecond, the coach bus provides direct door-to-door transportation from our university straight to the hotel. We do not need to carry heavy bags or change vehicles. During the 200-kilometer journey, our whole class can sit together, play group games, sing songs, and chat, which makes the journey very enjoyable.\n\nNext, I strongly disagree with traveling by motorbike convoy. Riding motorbikes over 200 kilometers along steep mountain passes is extremely dangerous for inexperienced students, especially if there is heavy rain or dense fog. If one motorbike has an accident or breaks down, it causes major trouble for the whole group.\n\nFinally, I do not choose the scenic express train. Although the train ride is relaxing, the train station is located 15 kilometers away from our hotel. That means 30 students with heavy luggage would have to hire multiple taxis, which wastes time and costs extra money.\n\nIn summary, renting a private coach bus is the safest, most convenient, and most united transport option for our class trip.",
      modelAnswerB2: "If I were tasked with making the collective decision for our 30-student class excursion, I would recommend hiring a private 35-seat coach bus without any hesitation.\n\nFirst of all, when organizing travel for a large cohort of 30 young adults over a distance of 200 kilometers, passenger safety is of paramount importance. A dedicated modern coach driven by a licensed professional driver guarantees optimal peace of mind. Students can travel comfortably in an air-conditioned cabin with ergonomic reclining seats, while the spacious luggage compartments easily accommodate all thirty suitcases without cluttering the aisle.\n\nFurthermore, a private charter provides seamless door-to-door transportation directly from our university campus straight to our mountain hotel lobby. This eliminates unnecessary transfers and keeps our entire class unified. During the 4-hour journey, we can organize icebreakers, team trivia, and group singing, transforming transit time into a delightful bonding experience.\n\nIn sharp contrast, I must strongly advise against riding motorbikes in a convoy. While the sense of independence and scenic photo opportunities might seem exciting, navigating 200 kilometers of steep, winding mountain passes poses severe safety hazards. Inexperienced student riders would be exposed to torrential rain, blind curves, and heavy transport trucks, making the likelihood of accidents unacceptably high for an official university trip.\n\nAs for the scenic express train, while it is undeniably picturesque and comfortable onboard, its logistical drawbacks are significant. The railway terminal is situated 15 kilometers away from our mountain accommodation. Disembarking with thirty sets of heavy baggage and coordinating multiple shuttle taxis would generate considerable confusion, delay our itinerary, and incur substantial extra transfer fees.\n\nAll things considered, the private coach bus strikes the perfect balance between uncompromising safety, logistical convenience, and class unity, making it unquestionably the superior choice.",
      modelAnswer: "If I were tasked with making the collective decision for our 30-student class excursion, I would recommend hiring a private 35-seat coach bus without any hesitation.\n\nFirst of all, when organizing travel for a large cohort of 30 young adults over a distance of 200 kilometers, passenger safety is of paramount importance. A dedicated modern coach driven by a licensed professional driver guarantees optimal peace of mind. Students can travel comfortably in an air-conditioned cabin with ergonomic reclining seats, while the spacious luggage compartments easily accommodate all thirty suitcases without cluttering the aisle.\n\nFurthermore, a private charter provides seamless door-to-door transportation directly from our university campus straight to our mountain hotel lobby. This eliminates unnecessary transfers and keeps our entire class unified. During the 4-hour journey, we can organize icebreakers, team trivia, and group singing, transforming transit time into a delightful bonding experience.\n\nIn sharp contrast, I must strongly advise against riding motorbikes in a convoy. While the sense of independence and scenic photo opportunities might seem exciting, navigating 200 kilometers of steep, winding mountain passes poses severe safety hazards. Inexperienced student riders would be exposed to torrential rain, blind curves, and heavy transport trucks, making the likelihood of accidents unacceptably high for an official university trip.\n\nAs for the scenic express train, while it is undeniably picturesque and comfortable onboard, its logistical drawbacks are significant. The railway terminal is situated 15 kilometers away from our mountain accommodation. Disembarking with thirty sets of heavy baggage and coordinating multiple shuttle taxis would generate considerable confusion, delay our itinerary, and incur substantial extra transfer fees.\n\nAll things considered, the private coach bus strikes the perfect balance between uncompromising safety, logistical convenience, and class unity, making it unquestionably the superior choice.",
      modelAnswerPhonetics: "/ɪf aɪ wɜː ˈtɑːskt wɪð ˈmeɪkɪŋ ðə dɪˈsɪʒən... aɪ wʊd ˌrɛkəˈmɛnd ˈhaɪərɪŋ ə ˈpraɪvɪt kəʊʧ bʌs/"
    }
  },
  {
    id: "set-3",
    title: "Set 3: Retirement Farewell Gift for Teacher",
    level: "Target Band B1 & B2 Benchmarks",
    description: "Selecting a meaningful retirement gift for a beloved English teacher of 35 years: engraved pen, spa card, or e-book reader.",
    iconName: "Gift",
    question: {
      id: "part2-set-3",
      situationTitle: "Choosing a Retirement Farewell Gift",
      situation: "Your class wants to buy a farewell retirement gift for your beloved English teacher who has been teaching literature and language for 35 years. Three gift ideas are considered: an engraved luxury fountain pen, a premium health spa gift card, or a digital e-book reader pre-loaded with classic literature.",
      options: [
        {
          id: "opt-3a",
          label: "Option A",
          title: "An Engraved Fountain Pen",
          description: "A luxury classic fountain pen engraved with her name and class dedication in a wooden box.",
          advantages: [
            "Elegant and traditional symbol of the teaching profession",
            "High sentimental and keepsake value"
          ],
          disadvantages: [
            "Limited daily practical use once she stops grading exams",
            "Likely to stay inside a decorative display cabinet"
          ]
        },
        {
          id: "opt-3b",
          label: "Option B",
          title: "A Premium Health Spa Gift Card",
          description: "A 3-day full wellness and massage package at a luxury resort spa center.",
          advantages: [
            "Helps her relax and de-stress after decades of teaching",
            "Pampering and rejuvenating experience"
          ],
          disadvantages: [
            "Temporary experience that leaves no lasting physical keepsake",
            "May not suit her personal preferences if she prefers home stay"
          ]
        },
        {
          id: "opt-3c",
          label: "Option C",
          title: "A Digital E-Book Reader",
          description: "A modern Kindle/Kobo e-reader pre-installed with hundreds of classic world literature novels.",
          advantages: [
            "Directly matches her lifelong passion for reading literature",
            "Adjustable font size is gentle on older eyes",
            "Enduring gift she can enjoy daily for years"
          ],
          disadvantages: [
            "Requires basic familiarity with charging and downloading"
          ]
        }
      ],
      prompt: "Which gift is the most meaningful and appropriate for the teacher? Explain your choice and why you rejected the other two options.",
      keywords: [
        "express our profound gratitude (bày tỏ lòng biết ơn sâu sắc)",
        "beloved educator of 35 years (nhà giáo đáng kính suốt 35 năm)",
        "lifelong passion for literature (đam mê văn học cháy bỏng cả đời)",
        "intellectual companion in retirement (người bạn đồng hành nuôi dưỡng trí tuệ khi về hưu)",
        "glare-free e-ink screen & adjustable font (màn hình chống chói và cỡ chữ tùy chỉnh)",
        "enduring personal keepsake (kỷ vật lưu niệm bền vững theo năm tháng)",
        "limited daily practical utility (giá trị sử dụng thực tế hàng ngày bị hạn chế)",
        "merely a decorative ornament (chỉ đơn thuần là đồ trang trí bày tủ kính)",
        "inherently transitory in nature (bản chất vốn dĩ chỉ nhất thời, mau trôi qua)",
        "no tangible physical keepsake (không để lại kỷ vật lưu niệm hữu hình)",
        "honor her illustrious educational legacy (tôn vinh di sản giáo dục lẫy lừng của cô)"
      ],
      tips: [
        "Step 1 - Opening & Respectful Stance (20s): Express deep gratitude for her 35-year teaching dedication and state your choice ('To express our profound gratitude to our beloved English teacher on her retirement, I would unequivocally choose Option C: a digital e-book reader...').",
        "Step 2 - In-Depth Justification (70-80s): Connect with her 35-year passion for literature, eye-friendly adjustable typography preventing strain, and how it acts as an enduring companion loaded with world classics.",
        "Step 3 - Reject Fountain Pen & Spa (60-70s): Fountain pen lacks utility once grading ends, becoming a dusty ornament; Health spa package is transitory with no tangible keepsake remaining.",
        "Step 4 - Strategic Synthesis & Conclusion (20s): Reaffirm that the e-reader synthesizes emotional significance, personalized thoughtfulness, and daily utility."
      ],
      pronunciationGuide: {
        english: {
          phonetic: "/tuː ɪksˈprɛs aʊər prəˈfaʊnd ˈɡrætɪtjuːd... aɪ wʊd ˌʌnɪˈkwɪvəkəli ʧuːz ˈɒpʃən siː/",
          intonation: "Use warm, appreciative and respectful intonation contour when describing the teacher's career.",
          stressAndLinking: "Pronounce key words: 'GRAT-i-tude', 'PRO-found', 'LIT-er-a-ture', 'or-na-ment'. Link 'express_our', 'pick_Option_C', 'enduring_companion'."
        },
        vietnamese: {
          huongDanPhatAm: "Từ 'gratitude' phát âm /ˈɡræt.ɪ.tjuːd/, 'profound' /prəˈfaʊnd/, 'transitory' /ˈtræn.zɪ.tər.i/, 'unequivocally' /ˌʌn.ɪˈkwɪv.ə.kəl.i/.",
          nguDieuVaNhanGiong: "Phân bổ 3 phút: 20s Mở bài tri ân -> 80s Phân tích niềm say mê văn học, màn hình dịu mắt người già và tính hữu dụng hàng ngày của E-reader -> 65s Bác bỏ Bút (không còn chấm bài) & Spa (mau hết) -> 15s Kết luận.",
          meoTraLoi: "Liên hệ trực tiếp đến đặc thù nghề giáo 35 năm (yêu sách văn học, nghỉ hưu nhiều thời gian) để tạo lập luận vừa xúc động vừa logic."
        }
      },
      languageInputB1: {
        targetBand: "B1",
        levelName: "Target Band B1 (Intermediate 4.0 - 5.5 | ~255 words for 2.0 - 2.5 mins)",
        levelGoal: "Vốn từ vựng tình cảm và quà tặng gần gũi, câu văn mạch lạc giải thích sở thích đọc sách của cô giáo và tính lâu bền của món quà để nói trôi chảy 2.0 - 2.5 phút.",
        vocabulary: [
          { phrase: "express gratitude / say thank you", meaningVi: "bày tỏ lòng biết ơn / nói lời cảm ơn", type: "Chủ đề chính" },
          { phrase: "retirement farewell gift", meaningVi: "món quà chia tay mừng về hưu", type: "Chủ đề chính" },
          { phrase: "dedicated 35 years to teaching", meaningVi: "cống hiến 35 năm cho sự nghiệp dạy học", type: "Bối cảnh" },
          { phrase: "lifelong passion for reading", meaningVi: "niềm đam mê đọc sách cả đời", type: "Lý do lựa chọn" },
          { phrase: "digital e-book reader", meaningVi: "máy đọc sách điện tử", type: "Món quà chọn" },
          { phrase: "store thousands of classic novels", meaningVi: "lưu trữ hàng ngàn tiểu thuyết kinh điển", type: "Tính năng" },
          { phrase: "gentle and easy on older eyes", meaningVi: "dịu nhẹ và không gây mỏi cho mắt người lớn tuổi", type: "Lợi ích sức khỏe" },
          { phrase: "adjust font size and brightness", meaningVi: "tùy chỉnh cỡ chữ và độ sáng", type: "Tính năng" },
          { phrase: "stop grading essays and lesson plans", meaningVi: "ngừng chấm bài văn và soạn giáo án", type: "Lý do bác bỏ bút" },
          { phrase: "sit on her desk / in a glass cabinet", meaningVi: "nằm yên trên bàn / trong tủ kính", type: "Lý do bác bỏ" },
          { phrase: "temporary experience / ends quickly", meaningVi: "trải nghiệm tạm thời / kết thúc nhanh chóng", type: "Lý do bác bỏ spa" },
          { phrase: "durable keepsake for many years", meaningVi: "kỷ vật bền bỉ lưu giữ nhiều năm", type: "Lợi ích lâu dài" }
        ],
        transitionPhrases: [
          "To express our gratitude to our beloved English teacher on her retirement, I think giving her a digital e-book reader is the best choice.",
          "First, our teacher has dedicated 35 years to teaching literature, so ...",
          "Second, this digital reader is very gentle and easy on older eyes because ...",
          "Next, I do not choose the engraved fountain pen because ...",
          "Also, I reject the health spa gift card because ...",
          "To sum up, the digital e-book reader is the most practical, thoughtful, and lasting gift to honor our teacher's dedication."
        ],
        sentenceFrames: [
          {
            stage: "1. Mở bài & Chọn lựa (Opening & Choice ~20s)",
            templates: [
              "To express our gratitude to our beloved English teacher on her retirement, I think giving her a digital e-book reader pre-loaded with classic literature is the best choice.",
              "In my opinion, Option C is the most meaningful and practical farewell gift for our teacher after 35 years of teaching."
            ]
          },
          {
            stage: "2. Triển khai 2 lý do chọn chi tiết (Supporting Reasons ~75s)",
            templates: [
              "First, our teacher has dedicated 35 years to teaching literature, so reading is her biggest lifelong passion. In retirement, this lightweight device can store thousands of classic novels for her to read anytime.",
              "Second, this digital reader is very gentle on older eyes because she can easily adjust the font size and brightness to prevent eye fatigue."
            ]
          },
          {
            stage: "3. Bác bỏ Bút máy & Spa chi tiết (Rejecting Alternatives ~65s)",
            templates: [
              "Next, I do not choose the engraved fountain pen because she will stop grading essays and writing lesson plans in retirement, so the pen will just sit in a glass cabinet.",
              "Also, I reject the health spa gift card because a spa massage is only a temporary experience that leaves no lasting physical keepsake."
            ]
          },
          {
            stage: "4. Kết luận tổng hợp (Conclusion ~20s)",
            templates: [
              "To sum up, the digital e-book reader is the most practical, thoughtful, and lasting gift to honor our teacher's dedication."
            ]
          }
        ],
        responseFormula: [
          "Bước 1 (0:00 - 0:20): Nêu mục đích tri ân 35 năm giảng dạy và chọn máy đọc sách: 'To express our gratitude to our beloved English teacher on her retirement, I think giving her a digital e-book reader is the best choice.'",
          "Bước 2 (0:20 - 1:35): Khai triển 2 điểm tương thích lớn: Thỏa mãn đam mê đọc sách khi về hưu (chứa hàng ngàn cuốn) + Màn hình dịu mắt người lớn tuổi (chỉnh cỡ chữ to, chống mỏi mắt).",
          "Bước 3 (1:35 - 2:40): Bác bỏ Bút máy (về hưu không còn chấm bài, chỉ cất tủ kính) và Spa (trải nghiệm nhất thời vài ngày là hết, không để lại kỷ vật).",
          "Bước 4 (2:40 - 3:00): Chốt lại bằng câu kết luận tôn vinh: 'To sum up, the digital e-book reader is the most practical, thoughtful, and lasting gift to honor our teacher's dedication.'"
        ],
        pronunciationGuide: {
          phonetics: "/tuː ɪksˈprɛs aʊər ˈɡrætɪtjuːd... ði iː-bʊk ˈriːdər ɪz ðə bɛst ʧɔɪs/",
          intonation: "Giữ âm lượng ấm áp, truyền cảm, ngắt giọng rõ ràng sau cụm mở đầu và các từ nối.",
          stressAndLinking: "Phát âm chuẩn âm /θ/ trong 'thoughtful', âm /d/ trong 'gratitude', 'dedicated', 'reader'.",
          vietnameseAdvice: "Nói rõ ràng và chân thành với tốc độ 105-120 từ/phút để duy trì phần nói đầy đủ, đĩnh đạc."
        }
      },
      languageInputB2: {
        targetBand: "B2",
        levelName: "Target Band B2 (Upper-Intermediate 6.0 - 8.0 | ~370 words for 2.5 - 3.0 mins)",
        levelGoal: "Sử dụng ngôn ngữ tri ân trang trọng, phân tích sâu sắc giữa giá trị biểu tượng (symbolic), giá trị tức thời (transitory) và giá trị bền vững (enduring intellectual companion).",
        vocabulary: [
          { phrase: "express our profound gratitude", meaningVi: "bày tỏ lòng biết ơn sâu sắc và chân thành", type: "Formal Expression" },
          { phrase: "devoted over three decades to teaching", meaningVi: "cống hiến hơn ba thập kỷ cho sự nghiệp giáo dục", type: "Collocation" },
          { phrase: "lifelong passion for literature", meaningVi: "niềm đam mê văn học cháy bỏng suốt đời", type: "Collocation" },
          { phrase: "enriching intellectual companion", meaningVi: "người bạn đồng hành làm giàu đẹp trí tuệ khi về hưu", type: "Collocation" },
          { phrase: "glare-free e-ink technology", meaningVi: "công nghệ mực điện tử chống chói bảo vệ mắt", type: "Noun Phrase" },
          { phrase: "safeguard her vision against eye strain", meaningVi: "bảo vệ thị lực khỏi tình trạng nhức mỏi mắt", type: "Collocation" },
          { phrase: "enduring personal memento", meaningVi: "kỷ vật cá nhân trường tồn theo năm tháng", type: "Noun Phrase" },
          { phrase: "venerable symbol of academic pedagogy", meaningVi: "biểu tượng cao quý của nghề sư phạm", type: "Advanced Academic Phrase" },
          { phrase: "limited practical utility", meaningVi: "giá trị sử dụng thực tế rất hạn chế", type: "Collocation" },
          { phrase: "inherently transitory in nature", meaningVi: "bản chất vốn dĩ chỉ nhất thời, mau trôi qua", type: "Academic Phrase" },
          { phrase: "tangible physical keepsake", meaningVi: "kỷ vật lưu niệm hữu hình có thể giữ mãi", type: "Noun Phrase" },
          { phrase: "honor her illustrious educational legacy", meaningVi: "tôn vinh sự nghiệp di sản giáo dục lẫy lừng của cô", type: "Collocation" }
        ],
        transitionPhrases: [
          "To express our profound gratitude to our beloved English teacher on the occasion of her retirement after 35 years of teaching, I would unequivocally choose ...",
          "First and foremost, as an educator who has devoted over three decades to ..., reading is undeniably her lifelong passion.",
          "Furthermore, modern e-readers feature ..., allowing her to ..., transforming this device into ...",
          "On the other hand, although an engraved luxury fountain pen represents ..., its practical utility diminishes drastically once ..., ultimately risking becoming ...",
          "Similarly, while a premium health spa getaway offers ..., it is inherently transitory in nature; once the retreat concludes, ...",
          "Therefore, ... seamlessly synthesizes emotional significance, personalized thoughtfulness, and enduring daily utility, making it the undisputed optimal tribute to honor her illustrious legacy."
        ],
        sentenceFrames: [
          {
            stage: "1. Respectful Opening & Thesis (~20s)",
            templates: [
              "To express our profound gratitude to our beloved English teacher on the occasion of her retirement after 35 years of teaching, I would unequivocally choose Option C: a digital e-book reader pre-loaded with classic literature.",
              "In honoring our teacher's 35-year illustrious educational career, Option C stands out as the most meaningful and enduring tribute."
            ]
          },
          {
            stage: "2. Deep Intellectual Alignment & Ergonomics (~80s)",
            templates: [
              "First and foremost, having dedicated over three decades to literature, reading is undeniably her lifelong passion, making an e-reader the ideal intellectual companion to bring her daily fulfillment during retirement.",
              "Furthermore, glare-free e-ink technology and customizable typography safeguard her vision against eye strain, while our pre-loaded dedication letter turns this into a cherished personal memento."
            ]
          },
          {
            stage: "3. Nuanced Analytical Dismissal (~65s)",
            templates: [
              "On the other hand, although an engraved fountain pen represents a venerable symbol of pedagogy, its practical utility diminishes once grading ceases, risking becoming merely a decorative ornament gathering dust.",
              "Similarly, while a luxury spa getaway offers temporary rejuvenation, it is inherently transitory; once the retreat concludes, no tangible physical keepsake remains to commemorate our class's gratitude."
            ]
          },
          {
            stage: "4. Enduring Synthesis (~15s)",
            templates: [
              "Therefore, the digital e-book reader seamlessly synthesizes emotional significance, personalized thoughtfulness, and enduring daily utility, making it the undisputed optimal tribute to honor her legacy."
            ]
          }
        ],
        responseFormula: [
          "Bước 1 (0:00 - 0:20): Mở bài với ngôn từ tri ân trang trọng ('To express our profound gratitude to our beloved English teacher on the occasion of her retirement... I would unequivocally choose Option C...').",
          "Bước 2 (0:20 - 1:40): Khai triển sâu sự tương thích hoàn hảo giữa máy đọc sách và tình yêu văn học 35 năm ('enriching intellectual companion', 'glare-free e-ink', 'safeguard vision', 'enduring personal memento').",
          "Bước 3 (1:40 - 2:45): Phản biện triết lý: Bút máy (dù là 'venerable symbol' nhưng 'limited practical utility', thành 'decorative ornament') và Spa ('inherently transitory in nature', không có 'tangible physical keepsake').",
          "Bước 4 (2:45 - 3:00): Đúc kết khẳng định món quà là sự tổng hòa hoàn hảo giữa tình cảm, công năng và kỷ niệm vĩnh cửu ('undisputed optimal tribute to honor her illustrious educational legacy')."
        ],
        pronunciationGuide: {
          phonetics: "/tuː ɪksˈprɛs aʊər prəˈfaʊnd ˈɡrætɪtjuːd... aɪ wʊd ˌʌnɪˈkwɪvəkəli ʧuːz ˈɒpʃən siː/",
          intonation: "Ngữ điệu trầm ấm, giàu cảm xúc, nhấn trọng âm rõ ràng ở các tính từ tri ân (proFOUND, beLOVED, enDURING, ilLUS-tri-ous).",
          stressAndLinking: "Liaisons mượt mà: 'profound_gratitude', 'intellectual_companion', 'honor_her_legacy', 'transitory_in_nature'.",
          vietnameseAdvice: "Thể hiện thái độ kính trọng qua ngữ điệu truyền cảm. Từng luận điểm phân tích sâu sắc, rành mạch với tốc độ 130-145 từ/phút."
        }
      },
      modelAnswerB1: "To express our gratitude to our beloved English teacher on her retirement, I think giving her a digital e-book reader pre-loaded with classic literature is the best choice.\n\nFirst, our teacher has dedicated 35 years to teaching literature, so reading books is her biggest lifelong passion. In retirement, she will have plenty of free time at home. An e-book reader can store thousands of classic novels, poems, and foreign books in a single lightweight device, so she can read anytime anywhere.\n\nSecond, this digital reader is very gentle and easy on older eyes. She can easily adjust the font size, brightness, and contrast. Unlike reading on a smartphone or computer screen, the electronic paper display prevents eye fatigue and allows her to read comfortably for hours.\n\nNext, I do not choose the engraved fountain pen. Although a luxury pen in a wooden box looks beautiful and traditional, our teacher will stop grading essays and writing lesson plans in retirement. Therefore, the pen will probably just sit on her desk or in a glass cabinet with very limited practical use.\n\nAlso, I reject the health spa gift card. Even though a 3-day spa package is relaxing and enjoyable, it is only a temporary experience. Once the massage ends, nothing tangible remains. An e-reader, however, is a durable keepsake that will remind her of our class every single day for years.\n\nTo sum up, the digital e-book reader is the most practical, thoughtful, and lasting gift to honor our teacher's dedication.",
      modelAnswerB2: "To express our profound gratitude to our beloved English teacher on the occasion of her retirement after 35 years of teaching, I would unequivocally choose Option C: a digital e-book reader pre-loaded with classic world literature.\n\nFirst and foremost, as an educator who has devoted over three decades to the study of literature and language, reading is undeniably her lifelong passion. During her well-deserved retirement, this e-reader will serve as an enriching intellectual companion. Having instant access to a vast digital library containing thousands of literary classics, philosophical essays, and contemporary works will bring her immense daily joy and fulfillment.\n\nFurthermore, modern e-readers feature glare-free e-ink technology and customizable typography, allowing her to enlarge font sizes and adjust warm backlighting to safeguard her vision against eye strain. Moreover, our class can pre-install a heartfelt digital dedication letter on the homepage, transforming this high-tech device into an enduring personal memento she can use for years to come.\n\nOn the other hand, although an engraved luxury fountain pen represents a venerable symbol of academic pedagogy, its practical utility diminishes drastically once a teacher retires from grading assignments and signing administrative documents. Ultimately, it risks becoming merely a decorative ornament gathering dust inside a display cabinet.\n\nSimilarly, while a premium health spa getaway offers temporary rejuvenation and pampering, it is inherently transitory in nature. Once the three-day retreat concludes, the experience fades without leaving any tangible physical keepsake to commemorate our class's deep affection and respect.\n\nTherefore, the digital e-book reader seamlessly synthesizes emotional significance, personalized thoughtfulness, and enduring daily utility, making it the undisputed optimal tribute to honor her illustrious educational legacy.",
      modelAnswer: "To express our profound gratitude to our beloved English teacher on the occasion of her retirement after 35 years of teaching, I would unequivocally choose Option C: a digital e-book reader pre-loaded with classic world literature.\n\nFirst and foremost, as an educator who has devoted over three decades to the study of literature and language, reading is undeniably her lifelong passion. During her well-deserved retirement, this e-reader will serve as an enriching intellectual companion. Having instant access to a vast digital library containing thousands of literary classics, philosophical essays, and contemporary works will bring her immense daily joy and fulfillment.\n\nFurthermore, modern e-readers feature glare-free e-ink technology and customizable typography, allowing her to enlarge font sizes and adjust warm backlighting to safeguard her vision against eye strain. Moreover, our class can pre-install a heartfelt digital dedication letter on the homepage, transforming this high-tech device into an enduring personal memento she can use for years to come.\n\nOn the other hand, although an engraved luxury fountain pen represents a venerable symbol of academic pedagogy, its practical utility diminishes drastically once a teacher retires from grading assignments and signing administrative documents. Ultimately, it risks becoming merely a decorative ornament gathering dust inside a display cabinet.\n\nSimilarly, while a premium health spa getaway offers temporary rejuvenation and pampering, it is inherently transitory in nature. Once the three-day retreat concludes, the experience fades without leaving any tangible physical keepsake to commemorate our class's deep affection and respect.\n\nTherefore, the digital e-book reader seamlessly synthesizes emotional significance, personalized thoughtfulness, and enduring daily utility, making it the undisputed optimal tribute to honor her illustrious educational legacy.",
      modelAnswerPhonetics: "/tuː ɪksˈprɛs aʊər prəˈfaʊnd ˈɡrætɪtjuːd... ði iː-bʊk ˈriːdər ɪz ðə bɛst ʧɔɪs/"
    }
  },
  {
    id: "set-4",
    title: "Set 4: Foreign Language Learning Strategy",
    level: "Target Band B1 & B2 Benchmarks",
    description: "Deciding the best method to master English speaking in 6 months for job interviews: private tutor, academy class, or English club.",
    iconName: "Languages",
    question: {
      id: "part2-set-4",
      situationTitle: "Mastering English Speaking within 6 Months",
      situation: "You need to become fluent and confident in English speaking within the next 6 months to prepare for upcoming job interviews at multinational companies. Three learning approaches are considered: hiring a 1-on-1 private online native tutor, enrolling in an intensive classroom course at an English academy, or joining a weekly weekend English speaking club.",
      options: [
        {
          id: "opt-4a",
          label: "Option A",
          title: "Intensive Classroom Course at an Academy",
          description: "Attending 3 evening classes per week with 15 students following a fixed textbook curriculum.",
          advantages: [
            "Structured syllabus covering grammar and vocabulary",
            "Competitive learning environment with classmates"
          ],
          disadvantages: [
            "Speaking time per student is diluted to only 5-10 minutes per class",
            "Rigid timetable and fixed pace may not focus on interview needs"
          ]
        },
        {
          id: "opt-4b",
          label: "Option B",
          title: "1-on-1 Private Online Native Tutor",
          description: "Taking tailored 60-minute video lessons focused purely on job interview simulations and personalized feedback.",
          advantages: [
            "100% active speaking output time with customized job interview topics",
            "Instant error correction on pronunciation and grammar",
            "Flexible scheduling fitting your daily timetable"
          ],
          disadvantages: [
            "Higher tuition cost per hour compared to group settings"
          ]
        },
        {
          id: "opt-4c",
          label: "Option C",
          title: "Joining a Weekly English Speaking Club",
          description: "Attending free weekend meetups with local English learners and expats at a café.",
          advantages: [
            "Very affordable and fun social networking atmosphere",
            "Casual low-pressure conversations"
          ],
          disadvantages: [
            "Unstructured chatter without professional error correction",
            "Irregular attendance and lack of systematic interview training"
          ]
        }
      ],
      prompt: "Which learning approach is the most effective to achieve your 6-month interview goal? Explain your choice and explain why the other options are rejected.",
      keywords: [
        "stringent 6-month timeframe (khung thời gian 6 tháng eo hẹp)",
        "strongly advocate for (ủng hộ nhiệt liệt phương án)",
        "pedagogical efficiency (hiệu quả sư phạm đào tạo)",
        "maximize active speaking output (tối đa hóa thời lượng nói chủ động)",
        "tailored corporate interview simulations (mô phỏng phỏng vấn doanh nghiệp may đo riêng)",
        "instant diagnostic feedback (phản hồi chẩn đoán sửa lỗi tức thì)",
        "pinpoint fossilized errors (chỉ ra các lỗi phát âm cố hữu ăn sâu)",
        "severely diluted speaking opportunities (cơ hội luyện nói bị chia nhỏ phân tán)",
        "rigid predetermined syllabus (giáo trình cứng nhắc có sẵn)",
        "lacks pedagogical rigor (thiếu tính kỷ luật và chuẩn mực sư phạm)",
        "reinforce inaccurate speech patterns (vô tình củng cố thói quen nói sai)",
        "highest return on investment (mang lại tỷ suất sinh lời / hiệu quả cao nhất)"
      ],
      tips: [
        "Step 1 - Objective & Stance (20s): State your urgent 6-month timeline and select Option B ('Given my stringent objective of mastering professional English speaking within a tight six-month timeframe for multinational corporate job interviews, I would strongly advocate for Option B...').",
        "Step 2 - In-Depth Justification (70-80s): Emphasize 100% active speaking output in 60-minute sessions, bespoke mock interview drills, and instant feedback diagnosing fossilized pronunciation errors.",
        "Step 3 - Reject Academy Course & Speaking Club (60-70s): Academy dilutes speaking to 5-10 mins with slow generic syllabus; English club is casual chatter lacking pedagogical rigor and error correction.",
        "Step 4 - Strategic Synthesis & Conclusion (20s): Reiterate that 1-on-1 private native tutoring offers the highest return on investment to ensure interview success."
      ],
      pronunciationGuide: {
        english: {
          phonetic: "/ˈɡɪvən maɪ ˈstrɪnʤənt əbˈʤɛktɪv... aɪ wʊd ˈstrɒŋli ˈædvəkeɪt fɔːr ˈɒpʃən biː/",
          intonation: "Use sharp rising intonation on constraints (6 months↗, interviews↗) and strong assertive fall on decision (TUTOR↘).",
          stressAndLinking: "Stress keywords: 'CUS-tom-ized', 'CON-struc-tive', 'SIM-u-la-tion', 'pe-da-GOG-i-cal'. Link 'speaking_output', 'rule_it_out', 'return_on_investment'."
        },
        vietnamese: {
          huongDanPhatAm: "Từ 'stringent' phát âm /ˈstrɪn.dʒənt/, 'pedagogical' /ˌped.əˈɡɒdʒ.ɪ.kəl/, 'simulation' /ˌsɪm.jəˈleɪ.ʃən/, 'rigor' /ˈrɪɡ.ər/.",
          nguDieuVaNhanGiong: "Phân bổ 3 phút: 20s Mở bài -> 80s Phân tích tối đa hóa thời lượng nói 100%, cá nhân hóa câu hỏi phỏng vấn và sửa lỗi phát âm tức thì -> 65s Bác bỏ Lớp đông (bị chia nhỏ 5 phút) & CLB (chém gió không ai sửa) -> 15s Kết luận.",
          meoTraLoi: "Lấy mốc thời gian gấp rút 6 tháng để chứng minh chỉ có học kèm 1-1 chuyên sâu mới đem lại hiệu quả tức thì."
        }
      },
      languageInputB1: {
        targetBand: "B1",
        levelName: "Target Band B1 (Intermediate 4.0 - 5.5 | ~260 words for 2.0 - 2.5 mins)",
        levelGoal: "Từ vựng học tập trực diện, cấu trúc so sánh lợi ích giữa học 1-1 và học lớp đông người, diễn đạt đơn giản và rõ ràng giúp nói liên tục 2.0 - 2.5 phút.",
        vocabulary: [
          { phrase: "urgent goal of mastering English", meaningVi: "mục tiêu cấp bách phải giỏi tiếng Anh", type: "Chủ đề chính" },
          { phrase: "pass multinational job interviews", meaningVi: "vượt qua các buổi phỏng vấn công ty đa quốc gia", type: "Mục tiêu" },
          { phrase: "1-on-1 private online native tutor", meaningVi: "gia sư bản xứ 1 kèm 1 online", type: "Phương án chọn" },
          { phrase: "maximize speaking practice", meaningVi: "tối đa hóa thời gian thực hành nói", type: "Lợi ích" },
          { phrase: "simulate real job interview questions", meaningVi: "mô phỏng các câu hỏi phỏng vấn thực tế", type: "Nội dung học" },
          { phrase: "provide instant error correction", meaningVi: "cung cấp việc sửa lỗi sai ngay tức thì", type: "Lợi ích" },
          { phrase: "correct pronunciation & intonation", meaningVi: "chỉnh sửa phát âm và ngữ điệu", type: "Lợi ích" },
          { phrase: "speak naturally and confidently", meaningVi: "nói chuyện tự nhiên và tự tin", type: "Kết quả đạt được" },
          { phrase: "divide attention among 15 students", meaningVi: "phải chia đều sự chú ý cho 15 học viên", type: "Lý do bác bỏ lớp trung tâm" },
          { phrase: "only 5 to 10 minutes of speaking time", meaningVi: "chỉ có 5 đến 10 phút thời gian nói", type: "Hạn chế" },
          { phrase: "casual and unstructured chatter", meaningVi: "trò chuyện ngẫu hứng không bài bản", type: "Lý do bác bỏ CLB" },
          { phrase: "cannot correct advanced grammar errors", meaningVi: "không thể sửa các lỗi ngữ pháp nâng cao", type: "Hạn chế" }
        ],
        transitionPhrases: [
          "Given that I have an urgent goal of mastering English speaking within 6 months for upcoming multinational job interviews, I would choose ...",
          "First, with a 1-on-1 private tutor, I can maximize my speaking practice because ...",
          "Second, the native tutor provides instant error correction whenever ...",
          "Next, I do not choose the classroom course at an academy because ...",
          "Also, I reject the weekly English speaking club because ...",
          "In conclusion, investing in a 1-on-1 private native tutor is the most focused, efficient, and reliable strategy to pass my job interviews in 6 months."
        ],
        sentenceFrames: [
          {
            stage: "1. Mở bài & Chọn lựa (Opening & Choice ~20s)",
            templates: [
              "Given that I have an urgent goal of mastering English speaking within 6 months for upcoming multinational job interviews, I would choose hiring a 1-on-1 private online native tutor.",
              "In my opinion, Option B is the fastest and most practical learning method to prepare for job interviews within 6 months."
            ]
          },
          {
            stage: "2. Triển khai 2 lý do chọn chi tiết (Supporting Reasons ~75s)",
            templates: [
              "First, with a 1-on-1 private tutor, I can maximize my speaking practice. During the entire 60 minutes, I am the only student speaking, and we can simulate real job interview questions.",
              "Second, the native tutor provides instant error correction on my pronunciation and grammar, helping me fix bad habits and speak naturally and confidently."
            ]
          },
          {
            stage: "3. Bác bỏ Lớp học & Câu lạc bộ chi tiết (Rejecting Alternatives ~65s)",
            templates: [
              "Next, I do not choose the classroom course at an academy because with 15 students, each student only gets 5 to 10 minutes of speaking time, and the textbook moves too slowly.",
              "Also, I reject the weekly English speaking club because conversations are casual and unstructured, and peers cannot correct my advanced mistakes."
            ]
          },
          {
            stage: "4. Kết luận tổng hợp (Conclusion ~20s)",
            templates: [
              "In conclusion, investing in a 1-on-1 private native tutor is the most focused, efficient, and reliable strategy to pass my job interviews in 6 months."
            ]
          }
        ],
        responseFormula: [
          "Bước 1 (0:00 - 0:20): Nêu mục tiêu cấp bách (6 tháng phỏng vấn) và chọn gia sư 1-1: 'Given that I have an urgent goal of mastering English speaking within 6 months for upcoming multinational job interviews, I would choose hiring a 1-on-1 private online native tutor.'",
          "Bước 2 (0:20 - 1:35): Khai triển 2 ưu điểm vượt trội: Tối đa hóa thời lượng thực hành nói 60 phút (mô phỏng câu hỏi phỏng vấn) + Sửa lỗi phát âm và ngữ pháp tức thì.",
          "Bước 3 (1:35 - 2:40): Bác bỏ Lớp trung tâm (15 người chỉ được nói 5-10 phút, giáo trình chậm) và CLB (nói chuyện phiếm, bạn bè không sửa được lỗi sai).",
          "Bước 4 (2:40 - 3:00): Chốt lại bằng câu kết luận khẳng định tính hiệu quả: 'In conclusion, investing in a 1-on-1 private native tutor is the most focused, efficient, and reliable strategy to pass my job interviews in 6 months.'"
        ],
        pronunciationGuide: {
          phonetics: "/ˈɡɪvən ðæt aɪ hæv ən ˈɜːʤənt ɡəʊl... aɪ wʊd ʧuːz ˈhaɪərɪŋ ə ˈpraɪvɪt ˈtjuːtər/",
          intonation: "Hạ giọng dứt khoát khi chốt lý do, nhấn mạnh vào các từ 'entire 60 minutes', 'instant error correction', 'reliable strategy'.",
          stressAndLinking: "Phát âm rõ đuôi /t/ và /s/ trong 'months', 'interviews', 'mistakes', 'practice', 'focused'.",
          vietnameseAdvice: "Tự tin, duy trì luồng nói liên tục với tốc độ 105-120 từ/phút. Nhớ gắn mọi lập luận với mục tiêu phỏng vấn trong 6 tháng."
        }
      },
      languageInputB2: {
        targetBand: "B2",
        levelName: "Target Band B2 (Upper-Intermediate 6.0 - 8.0 | ~375 words for 2.5 - 3.0 mins)",
        levelGoal: "Sử dụng từ vựng chuyên sâu về phương pháp luận giảng dạy, phân tích hiệu suất đầu tư thời gian (pedagogical efficiency / active speaking output) và khả năng làm chủ trọn vẹn 3 phút.",
        vocabulary: [
          { phrase: "stringent objective / tight timeframe", meaningVi: "mục tiêu khắt khe trong khung thời gian eo hẹp", type: "Collocation" },
          { phrase: "strongly advocate for Option B", meaningVi: "ủng hộ mạnh mẽ và nhiệt thành cho Phương án B", type: "Collocation" },
          { phrase: "pedagogical efficiency & customized training", meaningVi: "hiệu quả sư phạm và đào tạo may đo riêng biệt", type: "Academic Noun Phrase" },
          { phrase: "guarantees 100% active speaking output", meaningVi: "đảm bảo 100% thời lượng đầu ra thực hành nói chủ động", type: "Collocation" },
          { phrase: "tailored exclusively to my industry domain", meaningVi: "được thiết kế riêng biệt cho lĩnh vực ngành nghề của tôi", type: "Collocation" },
          { phrase: "rigorous mock interview simulations", meaningVi: "các buổi diễn tập phỏng vấn thử thách chuyên sâu", type: "Noun Phrase" },
          { phrase: "instant diagnostic feedback", meaningVi: "phản hồi chẩn đoán sửa lỗi tức thì", type: "Collocation" },
          { phrase: "pinpoint fossilized pronunciation errors", meaningVi: "chỉ ra chính xác các lỗi sai phát âm đã bị ăn sâu", type: "Academic Collocation" },
          { phrase: "refine speech cadence & fluency", meaningVi: "trau chuốt ngữ điệu, nhịp điệu và độ lưu loát", type: "Noun Phrase" },
          { phrase: "speaking opportunities are severely diluted", meaningVi: "cơ hội luyện nói bị phân tán, chia nhỏ nghiêm trọng", type: "Collocation" },
          { phrase: "lacks pedagogical rigor", meaningVi: "thiếu tính kỷ luật và chuẩn mực sư phạm", type: "Academic Phrase" },
          { phrase: "highest return on investment", meaningVi: "mang lại tỷ suất hiệu quả sinh lời cao nhất cho thời gian", type: "Idiom / Business Collocation" }
        ],
        transitionPhrases: [
          "Given my stringent objective of mastering professional English speaking within a tight six-month timeframe for multinational corporate job interviews, I would strongly advocate for ...",
          "First and foremost, in such a time-sensitive situation, ... are paramount.",
          "Furthermore, continuous 1-on-1 engagement provides ... on ..., allowing me to ...",
          "Conversely, I would firmly turn down the intensive classroom course at an academy because ...",
          "Similarly, while joining a weekend English speaking club is ..., it lacks pedagogical rigor because ...",
          "Taking all factors into account, investing in a dedicated 1-on-1 native tutor represents the highest return on investment, offering the most intensive, tailored, and dependable pathway to interview success within six months."
        ],
        sentenceFrames: [
          {
            stage: "1. Time-Bound Opening & Strategic Stance (~20s)",
            templates: [
              "Given my stringent objective of mastering professional English speaking within a tight six-month timeframe for multinational corporate job interviews, I would strongly advocate for Option B: hiring a 1-on-1 private online native tutor.",
              "With a stringent six-month deadline before corporate job interviews, personalized 1-on-1 tutoring is unequivocally the superior strategic choice."
            ]
          },
          {
            stage: "2. High-Efficiency Pedagogy Justification (~80s)",
            templates: [
              "First and foremost, in such a time-sensitive situation, pedagogical efficiency and customized training are paramount. A 1-on-1 tutor guarantees 100% active speaking output throughout every session, tailored to rigorous mock interview drills.",
              "Furthermore, continuous 1-on-1 engagement provides immediate, diagnostic feedback on pronunciation and grammatical subtleties, pinpointing fossilized errors and refining speech cadence."
            ]
          },
          {
            stage: "3. Rigorous Critique of Group Formats (~65s)",
            templates: [
              "Conversely, I would firmly turn down the intensive classroom course because individual speaking opportunities are severely diluted to barely 10 minutes, and the rigid syllabus progresses far too slowly.",
              "Similarly, while weekend English speaking clubs are socially enjoyable, casual chatter with fellow learners lacks pedagogical rigor and professional error correction, inadvertently reinforcing inaccurate speech patterns."
            ]
          },
          {
            stage: "4. Return-on-Investment Synthesis (~15s)",
            templates: [
              "Taking all factors into account, investing in a dedicated 1-on-1 native tutor represents the highest return on investment, offering the most intensive and dependable pathway to interview success within six months."
            ]
          }
        ],
        responseFormula: [
          "Bước 1 (0:00 - 0:20): Mở đầu ấn tượng kết hợp khung thời gian cấp bách và mục tiêu doanh nghiệp ('Given my stringent objective of mastering professional English speaking within a tight six-month timeframe for multinational corporate job interviews, I would strongly advocate for Option B...').",
          "Bước 2 (0:20 - 1:40): Khẳng định tính ưu việt của mô hình 1-1 bằng các thuật ngữ học thuật ('pedagogical efficiency', '100% active speaking output', 'bespoke interview simulation', 'pinpoint fossilized pronunciation errors').",
          "Bước 3 (1:40 - 2:45): Phản biện sắc bén lớp học trung tâm (cơ hội nói bị 'severely diluted', giáo trình 'rigid and generic') và CLB (thiếu 'pedagogical rigor', 'reinforces inaccurate speech patterns').",
          "Bước 4 (2:45 - 3:00): Chốt hạ kết luận khẳng định đây là khoản đầu tư sinh lời cao nhất ('highest return on investment', 'dependable pathway to interview success')."
        ],
        pronunciationGuide: {
          phonetics: "/ˈɡɪvən maɪ ˈstrɪnʤənt əbˈʤɛktɪv... aɪ wʊd ˈstrɒŋli ˈædvəkeɪt fɔːr ə ˈpraɪvɪt ˈtjuːtər/",
          intonation: "Ngữ điệu thuyết phục, biến thiên linh hoạt giữa câu điều kiện, câu nhượng bộ (Conversely↗, Similarly↗) và hạ giọng dứt khoát ở câu kết.",
          stressAndLinking: "Trọng âm rõ nét: 'pe-da-GOG-i-cal', 'di-LU-ted', 'fos-si-LIZED', 'cad-ence'. Nuốt âm và nối âm chuẩn xác.",
          vietnameseAdvice: "Tập trung thể hiện tư duy phân tích chiến lược sắc bén. Tốc độ nói trôi chảy, chuyên nghiệp với 130-145 từ/phút."
        }
      },
      modelAnswerB1: "Given that I have an urgent goal of mastering English speaking within 6 months for upcoming multinational job interviews, I would choose hiring a 1-on-1 private online native tutor.\n\nFirst, with a 1-on-1 private tutor, I can maximize my speaking practice. During the entire 60-minute lesson, I am the only student speaking, and the tutor can design lessons specifically for my target job interviews. We can simulate real job interview questions, practice professional introductions, and discuss business topics.\n\nSecond, the native tutor provides instant error correction. Whenever I make a grammatical mistake or mispronounce an important word, the tutor can correct me immediately and guide my intonation. This targeted feedback helps me fix bad habits and speak much more naturally and confidently within 6 months.\n\nNext, I do not choose the classroom course at an academy. In a traditional class with 15 students, the teacher must divide attention among everyone, meaning each student only gets 5 to 10 minutes of actual speaking time. Furthermore, the fixed textbook syllabus is too general and slow for my specific interview needs.\n\nAlso, I reject the weekly English speaking club. Although it is free and friendly, conversations there are casual and unstructured. Peers cannot correct my advanced grammar or pronunciation errors, which might cause me to repeat mistakes.\n\nIn conclusion, investing in a 1-on-1 private native tutor is the most focused, efficient, and reliable strategy to pass my job interviews in 6 months.",
      modelAnswerB2: "Given my stringent objective of mastering professional English speaking within a tight six-month timeframe for multinational corporate job interviews, I would strongly advocate for Option B: hiring a 1-on-1 private online native tutor.\n\nFirst and foremost, in such a time-sensitive situation, pedagogical efficiency and customized training are paramount. A 1-on-1 private tutor guarantees 100% active speaking output throughout every 60-minute session. Rather than following generic conversational topics, the curriculum can be tailored exclusively to my industry domain, incorporating rigorous mock interview simulations, STAR-method behavioral response drills, and corporate terminology.\n\nFurthermore, continuous 1-on-1 engagement provides immediate, diagnostic feedback on subtle grammatical inaccuracies, lexical precision, and phonetic intonation. A qualified native instructor can pinpoint fossilized pronunciation errors and refine my speech cadence, allowing me to fast-track my communicative competence and project commanding confidence before international hiring managers.\n\nConversely, I would firmly turn down the intensive classroom course at an academy. In a standard class of fifteen students, individual speaking opportunities are severely diluted to barely five or ten minutes per session. Moreover, adhering to a rigid, predetermined textbook syllabus progresses far too slowly and lacks the hyper-focused interview preparation that my tight timeline demands.\n\nSimilarly, while joining a weekend English speaking club is socially enjoyable and cost-free, it lacks pedagogical rigor. Casual café chatter with fellow learners is inherently unstructured and devoid of professional error correction, which inadvertently risks reinforcing inaccurate speech patterns rather than elevating professional fluency.\n\nTaking all factors into account, investing in a dedicated 1-on-1 native tutor represents the highest return on investment, offering the most intensive, tailored, and dependable pathway to interview success within six months.",
      modelAnswer: "Given my stringent objective of mastering professional English speaking within a tight six-month timeframe for multinational corporate job interviews, I would strongly advocate for Option B: hiring a 1-on-1 private online native tutor.\n\nFirst and foremost, in such a time-sensitive situation, pedagogical efficiency and customized training are paramount. A 1-on-1 private tutor guarantees 100% active speaking output throughout every 60-minute session. Rather than following generic conversational topics, the curriculum can be tailored exclusively to my industry domain, incorporating rigorous mock interview simulations, STAR-method behavioral response drills, and corporate terminology.\n\nFurthermore, continuous 1-on-1 engagement provides immediate, diagnostic feedback on subtle grammatical inaccuracies, lexical precision, and phonetic intonation. A qualified native instructor can pinpoint fossilized pronunciation errors and refine my speech cadence, allowing me to fast-track my communicative competence and project commanding confidence before international hiring managers.\n\nConversely, I would firmly turn down the intensive classroom course at an academy. In a standard class of fifteen students, individual speaking opportunities are severely diluted to barely five or ten minutes per session. Moreover, adhering to a rigid, predetermined textbook syllabus progresses far too slowly and lacks the hyper-focused interview preparation that my tight timeline demands.\n\nSimilarly, while joining a weekend English speaking club is socially enjoyable and cost-free, it lacks pedagogical rigor. Casual café chatter with fellow learners is inherently unstructured and devoid of professional error correction, which inadvertently risks reinforcing inaccurate speech patterns rather than elevating professional fluency.\n\nTaking all factors into account, investing in a dedicated 1-on-1 native tutor represents the highest return on investment, offering the most intensive, tailored, and dependable pathway to interview success within six months.",
      modelAnswerPhonetics: "/ˈɡɪvən maɪ ˈstrɪnʤənt əbˈʤɛktɪv... aɪ wʊd ˈstrɒŋli ˈædvəkeɪt fɔːr ə ˈpraɪvɪt ˈtjuːtər/"
    }
  }
];
