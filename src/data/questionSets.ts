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
        "opt for (chọn lựa)",
        "weigh the pros and cons (cân nhắc ưu nhược điểm)",
        "first and foremost (đầu tiên và quan trọng nhất)",
        "unwind after stressful exams (thư giãn sau kỳ thi vất vả)",
        "cost-effective (tiết kiệm chi phí)",
        "strengthen our friendship bond (thắt chặt tình bạn)",
        "on the flip side (mặt khác / ngược lại)",
        "rule out (loại trừ)",
        "exorbitant accommodation costs (chi phí ở đắt đỏ)",
        "all things considered (tóm lại / nhìn chung)"
      ],
      tips: [
        "Step 1 - Introduction (15s): Rephrase the situation and state your final choice clearly.",
        "Step 2 - Justify Chosen Option (60s): Give 2-3 strong arguments (affordability, nature connection, team bonding) with details.",
        "Step 3 - Reject Other 2 Options (60s): Explain specific drawbacks (beach resort is too expensive for students; city tour is too similar to daily urban routine).",
        "Step 4 - Conclusion (15s): Summarize briefly ('To wrap up, considering our budget and desire for adventure...')."
      ],
      pronunciationGuide: {
        english: {
          phonetic: "/aɪ wʊd ˈdɛfɪnɪtli ˈɒpt fɔːr ˈkæmpɪŋ bɪˈkɒz ɪt ɪz bəʊθ fʌn ænd əˈfɔːdəbl/",
          intonation: "Use clear contrastive stress on your choice (CAMPING↗) and transitional fall-rise intonation when giving drawbacks.",
          stressAndLinking: "Link words smoothly: 'opt_for', 'first_and_foremost', 'rule_out'."
        },
        vietnamese: {
          huongDanPhatAm: "Từ 'opt for' phát âm /ɒpt fɔːr/, 'exorbitant' /ɪɡˈzɔː.bɪ.tənt/. Chú ý âm đuôi /t/ và /d/.",
          nguDieuVaNhanGiong: "Nhấn mạnh lựa chọn của bạn ngay ở câu mở đầu. Khi chuyển giao sang lý do bác bỏ Option B và C, sử dụng ngữ điệu chuyển tiếp rõ ràng: 'As for Option B...', 'Regarding Option C...'.",
          meoTraLoi: "Cấu trúc 4 phần chuẩn VSTEP Part 2: Mở bài -> Lý do chọn Option A -> Bác bỏ B & C -> Kết luận. Nhớ phân bổ thời gian hợp lý."
        }
      },
      languageInputB1: {
        targetBand: "B1",
        levelName: "Target Band B1 (Intermediate 4.0 - 5.5)",
        levelGoal: "Cung cấp vốn từ vựng và cấu trúc đơn giản, rõ ràng, dễ nhớ, tập trung vào việc nói trôi chảy không vấp ngắt quãng và tuân thủ đúng cấu trúc 4 bước.",
        vocabulary: [
          { phrase: "go on a camping trip", meaningVi: "đi cắm trại dã ngoại", type: "Chủ đề chính" },
          { phrase: "suitable for student budget", meaningVi: "phù hợp với túi tiền sinh viên", type: "Lý do lựa chọn" },
          { phrase: "set up tents", meaningVi: "dựng lều cắm trại", type: "Hoạt động" },
          { phrase: "cook around a campfire", meaningVi: "nấu nướng quanh lửa trại", type: "Hoạt động" },
          { phrase: "enjoy fresh air", meaningVi: "hít thở không khí trong lành", type: "Lợi ích" },
          { phrase: "become closer friends", meaningVi: "trở nên thân thiết hơn", type: "Lợi ích" },
          { phrase: "too costly / very expensive", meaningVi: "quá tốn kém / đắt đỏ", type: "Lý do bác bỏ" },
          { phrase: "feel boring", meaningVi: "cảm thấy nhàm chán", type: "Lý do bác bỏ" }
        ],
        transitionPhrases: [
          "In my opinion, ... is the best choice.",
          "First, ... because ...",
          "Second, we can ... so that ...",
          "I do not choose ... because it is ...",
          "Also, I reject ... because ...",
          "In conclusion, ... is the best option for us."
        ],
        sentenceFrames: [
          {
            stage: "1. Mở bài & Chọn lựa (Opening & Choice)",
            templates: [
              "In my opinion, going on a camping trip in the forest is the best choice for our group of university friends.",
              "If I have to make a choice, I will definitely choose Option A."
            ]
          },
          {
            stage: "2. Nêu 2 lý do chọn (Supporting Reasons)",
            templates: [
              "First, camping is very cheap, so it is suitable for our student budget.",
              "Second, we can set up tents, cook around a campfire, and enjoy fresh air together to relax."
            ]
          },
          {
            stage: "3. Bác bỏ 2 lựa chọn còn lại (Rejecting Alternatives)",
            templates: [
              "Second, I do not choose the beach resort because the hotel rooms are very expensive.",
              "Also, I reject the city tour because we already live in the city every day, so it will feel boring."
            ]
          },
          {
            stage: "4. Kết luận ngắn gọn (Conclusion)",
            templates: [
              "In conclusion, a camping trip in the forest is the most fun and affordable choice for our group."
            ]
          }
        ],
        responseFormula: [
          "Bước 1: Nêu lựa chọn trực tiếp với mẫu câu 'In my opinion, [Option] is the best choice for...'",
          "Bước 2: Nêu 2 lý do cụ thể với từ nối 'First, ...' và 'Second, ...'",
          "Bước 3: Bác bỏ 2 lựa chọn còn lại với 'I do not choose Option B because...' và 'Also, I reject Option C because...'",
          "Bước 4: Kết luận tóm gọn bằng 'In conclusion, [Option] is the best option.'"
        ],
        pronunciationGuide: {
          phonetics: "/ɪn maɪ əˈpɪnjən, ˈkæmpɪŋ ɪn ðə ˈfɒrɪst ɪz ðə bɛst ʧɔɪs/",
          intonation: "Lên giọng nhẹ ở các từ nối (First↗, Second↗) và hạ giọng chắc chắn ở cuối câu.",
          stressAndLinking: "Phát âm rõ âm cuối /s/, /t/, /d/ trong các từ 'budget', 'forest', 'tents', 'expensive'.",
          vietnameseAdvice: "Nói tốc độ vừa phải, giữ nhịp thở đều. Dùng câu ngắn gọn để tránh sai ngữ pháp chia thì."
        }
      },
      languageInputB2: {
        targetBand: "B2",
        levelName: "Target Band B2 (Upper-Intermediate 6.0 - 8.0)",
        levelGoal: "Sử dụng các cụm Collocations học thuật, cấu trúc câu phức (mệnh đề nhượng bộ, điều kiện, bị động), từ nối chuyển ý nâng cao và ngữ điệu tự nhiên.",
        vocabulary: [
          { phrase: "opt for / strongly advocate for", meaningVi: "lựa chọn / ủng hộ mạnh mẽ phương án", type: "Advanced Verb" },
          { phrase: "weigh the pros and cons", meaningVi: "cân nhắc kỹ lưỡng ưu nhược điểm", type: "Idiom" },
          { phrase: "recharge mental batteries", meaningVi: "nạp lại năng lượng tinh thần sau kỳ thi", type: "Collocation" },
          { phrase: "cost-effective on a tight budget", meaningVi: "hiệu quả chi phí cho ngân sách sinh viên", type: "Collocation" },
          { phrase: "strengthen friendship bonds", meaningVi: "thắt chặt tình bạn keo sơn gắn bó", type: "Collocation" },
          { phrase: "rule out / eliminate from consideration", meaningVi: "loại trừ khỏi sự cân nhắc", type: "Phrasal Verb" },
          { phrase: "exorbitant accommodation costs", meaningVi: "chi phí phòng khách sạn đắt đỏ", type: "Advanced Noun Phrase" },
          { phrase: "pose a financial burden", meaningVi: "gây gánh nặng tài chính đáng kể", type: "Collocation" },
          { phrase: "urban routine & congestion", meaningVi: "nhịp sống đô thị xô bồ quen thuộc", type: "Noun Phrase" },
          { phrase: "all things considered", meaningVi: "sau khi cân nhắc mọi khía cạnh tổng thể", type: "Discourse Marker" }
        ],
        transitionPhrases: [
          "Among the three options provided, I strongly believe that...",
          "First and foremost, ...",
          "Moreover, ...",
          "On the other hand, I would rule out ... primarily due to ...",
          "Similarly, I find ... less appealing because ...",
          "All things considered, taking into account ..., ... is undoubtedly the most suitable option."
        ],
        sentenceFrames: [
          {
            stage: "1. Introduction & Thesis",
            templates: [
              "Among the three options provided, I strongly believe that [Option] is the optimal choice for our group of friends.",
              "If I were faced with this collective decision, I would definitely opt for [Option] without hesitation."
            ]
          },
          {
            stage: "2. In-Depth Justification",
            templates: [
              "First and foremost, after an exhausting semester of final exams, spending time in nature offers a wonderful way to recharge our mental batteries.",
              "Moreover, it is highly cost-effective for university students who usually operate on a tight budget."
            ]
          },
          {
            stage: "3. Comparative Refutation",
            templates: [
              "On the other hand, I would rule out Option B primarily due to its exorbitant accommodation costs, which might pose a financial burden.",
              "Similarly, I find Option C less appealing because walking through museums in a noisy city fails to give us a true escape from our urban routine."
            ]
          },
          {
            stage: "4. Sophisticated Synthesis",
            templates: [
              "All things considered, taking into account our financial constraints and desire for relaxation, [Option] is undoubtedly the most suitable option."
            ]
          }
        ],
        responseFormula: [
          "Bước 1: Paraphrase ngữ cảnh và dùng stance marker trang trọng ('Among the three options...', 'strongly advocate for').",
          "Bước 2: Phân tích 2 luận điểm sâu sắc với Collocations B2 ('recharge mental batteries', 'cost-effective', 'tight budget').",
          "Bước 3: Phản biện sắc bén 2 phương án còn lại bằng cấu trúc nhượng bộ và từ nối tương phản ('On the other hand, I would rule out...', 'Similarly, I find... less appealing').",
          "Bước 4: Tổng hợp và chốt lại quyết định tối ưu ('All things considered, considering our budget...')."
        ],
        pronunciationGuide: {
          phonetics: "/əˈmʌŋ ðə θriː ˈɒpʃənz prəˈvaɪdɪd, aɪ strɒŋli bɪˈliːv ðæt ə ˈkæmpɪŋ trɪp.../",
          intonation: "Sử dụng Fall-Rise intonation ở các mệnh đề chuyển tiếp (On the other hand↗, I would rule out Option B↘). Nhấn trọng âm tương phản (CAMPING vs RESORT).",
          stressAndLinking: "Nối âm tự nhiên: 'opt_for', 'first_and_foremost', 'rule_it_out'. Giảm nhẹ các hư từ (weak forms: /fɔːr/, /əv/).",
          vietnameseAdvice: "Nhấn chuẩn trọng âm từ đa âm tiết (exORbitant, acCOMMoDATion, unDOUBTedly). Giữ nhịp điệu phân tích mạch lạc và uyển chuyển."
        }
      },
      modelAnswerB1: "In my opinion, going on a camping trip in the forest is the best choice for our group of university friends.\n\nFirst, camping in the forest is very cheap, so it is suitable for our student budget after finishing our exams. We can set up tents, cook around a campfire, and enjoy fresh air together. This will help us relax and become closer friends.\n\nSecond, I do not choose the beach resort because the hotel rooms and seafood restaurants there are very expensive, especially on weekends. It is too costly for us.\n\nAlso, I reject the city tour and museum visit because we already live and study in the city every day. Going to museums will feel boring and not like a real holiday.\n\nIn conclusion, a camping trip in the forest is the most fun and affordable choice for our group.",
      modelAnswerB2: "Among the three options provided, I strongly believe that a camping trip in the forest is the best choice for our group of university friends. First and foremost, after an exhausting semester of final exams, immersed in books and computer screens, spending time in nature offers a wonderful way to recharge our mental batteries and breathe fresh air. Moreover, camping is highly cost-effective for university students who usually operate on a tight budget. Setting up tents, gathering around an evening campfire, and singing songs together will surely create unforgettable bonding memories.\n\nOn the other hand, I would rule out the beach resort getaway primarily due to its exorbitant accommodation costs, especially during peak seasons, which might pose a financial burden for some friends in our group. Similarly, I find the cultural city tour less appealing because walking through museums in a noisy city feels too similar to our everyday urban routine, failing to give us a true escape.\n\nAll things considered, considering our student budget and need for relaxation, the forest camping trip is undoubtedly the most suitable option.",
      modelAnswer: "Among the three options provided, I strongly believe that a camping trip in the forest is the best choice for our group of university friends. First and foremost, after an exhausting semester of final exams, immersed in books and computer screens, spending time in nature offers a wonderful way to recharge our mental batteries and breathe fresh air. Moreover, camping is highly cost-effective for university students who usually operate on a tight budget. Setting up tents, gathering around an evening campfire, and singing songs together will surely create unforgettable bonding memories.\n\nOn the other hand, I would rule out the beach resort getaway primarily due to its exorbitant accommodation costs, especially during peak seasons, which might pose a financial burden for some friends in our group. Similarly, I find the cultural city tour less appealing because walking through museums in a noisy city feels too similar to our everyday urban routine, failing to give us a true escape.\n\nAll things considered, considering our student budget and need for relaxation, the forest camping trip is undoubtedly the most suitable option.",
      modelAnswerPhonetics: "/əˈmʌŋ ðə θriː ˈɒpʃənz prəˈvaɪdɪd, aɪ strɒŋli bɪˈliːv ðæt ə ˈkæmpɪŋ trɪp.../"
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
        "recommend without hesitation (khuyên chọn không chút do dự)",
        "safety is paramount (an toàn là ưu tiên số một)",
        "door-to-door transportation (vận chuyển tận nơi đón trả)",
        "air-conditioned vehicle (xe có điều hòa mát mẻ)",
        "advise strongly against (khuyên can kịch liệt không nên)",
        "winding mountain passes (đèo núi quanh co hiểm trở)",
        "severe safety hazards (nguy cơ an toàn nghiêm trọng)",
        "extra transfer fees (chi phí trung chuyển phát sinh)",
        "strike the perfect balance (đạt được sự cân bằng hoàn hảo)",
        "collective decision (quyết định tập thể)"
      ],
      tips: [
        "Step 1 - Choice (15s): State your choice directly ('If I were to make the decision for our class trip, I would recommend hiring a private coach bus...').",
        "Step 2 - Support Coach Bus (60s): Highlight safety with 30 students, luggage capacity, professional driver, and direct door-to-door route.",
        "Step 3 - Reject Motorbike & Train (60s): Emphasize danger of 200 km mountain pass on motorbikes; mention train station is 15 km far from hotel, adding taxi hassle.",
        "Step 4 - Conclusion (15s): Reaffirm that coach bus ensures safety and cohesion for 30 classmates."
      ],
      pronunciationGuide: {
        english: {
          phonetic: "/ɪf aɪ wɜː tuː meɪk ðə dɪˈsɪʒən... aɪ wʊd ˌrɛkəˈmɛnd ˈhaɪərɪŋ ə ˈpraɪvɪt kəʊʧ bʌs/",
          intonation: "Maintain steady assertive intonation on safety justifications; pitch drops definitively at period ends.",
          stressAndLinking: "Emphasize multi-syllable key words: 'PAR-a-mount', 'CON-voy', 'EX-cur-sion'. Link 'coach_bus', 'door_to_door'."
        },
        vietnamese: {
          huongDanPhatAm: "Từ 'paramount' phát âm /ˈpær.ə.maʊnt/, 'convoy' /ˈkɒn.vɔɪ/, 'excursion' /ɪkˈskɜː.ʃən/.",
          nguDieuVaNhanGiong: "Sử dụng từ nối chuyển ý như 'First and foremost', 'When it comes to Option B...', 'Regarding the train...' để phần nói mạch lạc.",
          meoTraLoi: "Tập trung phân tích yếu tố an toàn cho 30 người để tạo lập luận áp đảo so với xe máy."
        }
      },
      languageInputB1: {
        targetBand: "B1",
        levelName: "Target Band B1 (Intermediate 4.0 - 5.5)",
        levelGoal: "Cung cấp từ vựng cụ thể về phương tiện đi lại, cấu trúc câu điều kiện loại 1/2 đơn giản, từ nối mạch lạc và câu trả lời rõ ràng không phức tạp.",
        vocabulary: [
          { phrase: "hire a private coach bus", meaningVi: "thuê xe khách riêng", type: "Chủ đề chính" },
          { phrase: "safe and comfortable", meaningVi: "an toàn và thoải mái", type: "Lý do lựa chọn" },
          { phrase: "air-conditioning", meaningVi: "có điều hòa mát", type: "Tiện ích" },
          { phrase: "luggage space for 30 students", meaningVi: "khoang hành lý cho 30 người", type: "Tiện ích" },
          { phrase: "direct from school to hotel", meaningVi: "đón thẳng từ trường đến khách sạn", type: "Lợi ích" },
          { phrase: "dangerous and tiring", meaningVi: "nguy hiểm và mệt mỏi", type: "Lý do bác bỏ" },
          { phrase: "mountain roads / steep passes", meaningVi: "đường đèo núi dốc", type: "Lý do bác bỏ" },
          { phrase: "pay extra money for taxis", meaningVi: "tốn thêm tiền đi taxi", type: "Lý do bác bỏ" }
        ],
        transitionPhrases: [
          "If I have to choose, I will choose ...",
          "First, traveling by ... is very safe.",
          "Second, the driver will take us directly ...",
          "I don't think riding motorbikes is a good idea because ...",
          "Finally, I do not choose the train because ...",
          "In summary, ... is the safest option for our class."
        ],
        sentenceFrames: [
          {
            stage: "1. Mở bài & Chọn lựa (Opening & Choice)",
            templates: [
              "If I have to choose the best transport for our class trip of 30 students, I would choose hiring a private coach bus.",
              "In my opinion, renting a coach bus is the most suitable choice for our class."
            ]
          },
          {
            stage: "2. Nêu 2 lý do chọn (Supporting Reasons)",
            templates: [
              "First, traveling by coach bus is very safe and comfortable for 30 students with big luggage.",
              "Second, a professional driver will take us directly from our school to the hotel."
            ]
          },
          {
            stage: "3. Bác bỏ 2 lựa chọn còn lại (Rejecting Alternatives)",
            templates: [
              "Second, I don't think riding motorbikes is a good idea because 200 km on mountain roads is very dangerous if it rains.",
              "Finally, I do not choose the train because the station is 15 kilometers away from our hotel, so we must pay extra for taxis."
            ]
          },
          {
            stage: "4. Kết luận ngắn gọn (Conclusion)",
            templates: [
              "In summary, renting a private coach bus is the safest and most convenient option for our class."
            ]
          }
        ],
        responseFormula: [
          "Bước 1: Nêu lựa chọn trực tiếp: 'If I have to choose the best transport..., I would choose [Option A].'",
          "Bước 2: Nêu 2 ưu điểm lớn (an toàn + khoang hành lý lớn + đi thẳng).",
          "Bước 3: Bác bỏ xe máy (đường đèo nguy hiểm) và tàu hỏa (ga xa tốn tiền taxi).",
          "Bước 4: Kết luận tóm gọn: 'In summary, [Option A] is the safest and most convenient option.'"
        ],
        pronunciationGuide: {
          phonetics: "/ɪf aɪ hæv tuː ʧuːz, aɪ wʊd ʧuːz ˈhaɪərɪŋ ə ˈpraɪvɪt kəʊʧ bʌs/",
          intonation: "Hạ giọng ở cuối các câu khẳng định lý do, giữ tốc độ nói ổn định.",
          stressAndLinking: "Chú ý phát âm rõ âm /ʧ/ trong 'coach', âm /s/ trong 'bus', 'students', 'dangerous'.",
          vietnameseAdvice: "Đừng vội vàng, phát âm từng cụm từ rõ ràng. Nhấn mạnh từ 'safety' và 'comfortable'."
        }
      },
      languageInputB2: {
        targetBand: "B2",
        levelName: "Target Band B2 (Upper-Intermediate 6.0 - 8.0)",
        levelGoal: "Phát triển lập luận đa chiều với từ vựng vận tải & rủi ro cao cấp, sử dụng cấu trúc tương phản (In contrast, As for...) và kết luận mang tính phân tích sâu sắc.",
        vocabulary: [
          { phrase: "recommend without hesitation", meaningVi: "khuyên chọn không chút đắn đo do dự", type: "Collocation" },
          { phrase: "safety is of paramount importance", meaningVi: "an toàn là yếu tố tối quan trọng hàng đầu", type: "Idiom / Phrase" },
          { phrase: "direct door-to-door transportation", meaningVi: "vận tải đón trả tận nơi thông suốt", type: "Collocation" },
          { phrase: "spacious luggage compartments", meaningVi: "khoang hành lý rộng rãi tiện nghi", type: "Noun Phrase" },
          { phrase: "strongly advise against", meaningVi: "kịch liệt khuyên can không nên chọn", type: "Collocation" },
          { phrase: "winding mountain passes", meaningVi: "những cung đường đèo quanh co nguy hiểm", type: "Collocation" },
          { phrase: "pose severe safety hazards", meaningVi: "tiềm ẩn hiểm họa khôn lường về an toàn", type: "Collocation" },
          { phrase: "logistical hassle & transfer fees", meaningVi: "phiền toái hậu cần và chi phí trung chuyển", type: "Noun Phrase" },
          { phrase: "strike the perfect balance", meaningVi: "đạt được sự cân bằng tối ưu giữa tiện nghi và an toàn", type: "Idiom" },
          { phrase: "collective excursion", meaningVi: "chuyến dã ngoại tập thể lớp", type: "Formal Noun" }
        ],
        transitionPhrases: [
          "If I were to make the decision for our class trip, I would recommend ... without any hesitation.",
          "First of all, when traveling with a large group of 30 students, ... is paramount.",
          "Furthermore, ... offers ...",
          "In contrast, I strongly advise against ...",
          "As for the express train, while it is ..., ...",
          "In conclusion, ... strikes the perfect balance between safety, comfort, and convenience."
        ],
        sentenceFrames: [
          {
            stage: "1. Stance & Strategic Opening",
            templates: [
              "If I were to make the collective decision for our class trip, I would recommend hiring a private coach bus without hesitation.",
              "Given that we are organizing a trip for 30 students, Option A stands out as the most rational choice."
            ]
          },
          {
            stage: "2. Rigorous Multi-Point Justification",
            templates: [
              "First of all, when traveling with 30 students, safety is paramount, and an experienced professional driver guarantees peace of mind.",
              "Furthermore, a coach bus provides direct door-to-door transportation straight to our hotel, saving significant logistical hassle."
            ]
          },
          {
            stage: "3. Detailed Counter-Refutation",
            templates: [
              "In contrast, I strongly advise against riding motorbikes in a convoy because traversing 200 km of winding mountain passes poses severe hazards.",
              "As for the scenic train, while it is undeniably picturesque, the railway station is situated 15 km away, incurring extra transfer costs and delay."
            ]
          },
          {
            stage: "4. Balanced Synthesis",
            templates: [
              "In conclusion, the private coach bus strikes the perfect balance between passenger safety, comfort, and cost-effectiveness."
            ]
          }
        ],
        responseFormula: [
          "Bước 1: Khởi đầu tự tin với giả định điều kiện loại 2 ('If I were to make the decision... I would recommend...').",
          "Bước 2: Khai triển luận điểm an toàn & hậu cần tập thể bằng từ vựng cao cấp ('safety is paramount', 'door-to-door transportation').",
          "Bước 3: Bác bỏ xe máy (phân tích hiểm họa tai nạn đường đèo) và tàu hỏa (khoảng cách ga xa 15km phát sinh chi phí trung chuyển).",
          "Bước 4: Kết luận bằng thành ngữ B2 đắt giá ('strikes the perfect balance between safety, comfort, and convenience')."
        ],
        pronunciationGuide: {
          phonetics: "/ɪf aɪ wɜː tuː meɪk ðə dɪˈsɪʒən... aɪ wʊd ˌrɛkəˈmɛnd ˈhaɪərɪŋ ə ˈpraɪvɪt kəʊʧ bʌs/",
          intonation: "Sử dụng ngữ điệu đĩnh đạc, nhấn mạnh vào các từ trọng tâm biểu thị mức độ (PAR-a-mount, se-VERE, un-DOUBT-ed-ly).",
          stressAndLinking: "Luyện phát âm nối âm mượt mà: 'strike_the_perfect_balance', 'door_to_door'.",
          vietnameseAdvice: "Tập trung thể hiện phong thái thuyết trình trưởng thành, rành mạch và có chiều sâu lập luận."
        }
      },
      modelAnswerB1: "If I have to choose the best transport for our class trip of 30 students, I would choose hiring a private coach bus.\n\nFirst, traveling by coach bus is very safe and comfortable. We have 30 people, so a 35-seater bus with air-conditioning has enough seats and luggage space for everyone. The driver will take us directly from our school to our hotel in the mountains.\n\nSecond, I don't think riding motorbikes is a good idea because driving 200 kilometers on mountain roads is very dangerous and tiring, especially if it rains.\n\nFinally, I do not choose the train because the train station is 15 kilometers away from our hotel, so we would have to pay extra money for taxis.\n\nIn summary, renting a private coach bus is the safest and most convenient option for our class.",
      modelAnswerB2: "If I were to make the decision for our class trip, I would recommend hiring a private coach bus without any hesitation. First of all, when traveling with a large group of 30 students, safety is paramount. A modern coach driven by an experienced professional driver ensures that everyone travels comfortably in an air-conditioned vehicle with spacious luggage compartments. Furthermore, a coach bus offers direct door-to-door transportation from our university straight to our hotel in the mountain city, saving us time and hassle.\n\nIn contrast, I strongly advise against traveling by motorbikes in a convoy. Riding over 200 kilometers on winding mountain passes poses severe safety risks, especially for inexperienced student riders exposed to sudden rain or heavy trucks. As for the express train, while it is comfortable, the railway station is located 15 kilometers away from our hotel, which would require hiring additional taxis and paying extra transfer fees.\n\nIn conclusion, the private coach bus strikes the perfect balance between safety, comfort, and convenience for our class.",
      modelAnswer: "If I were to make the decision for our class trip, I would recommend hiring a private coach bus without any hesitation. First of all, when traveling with a large group of 30 students, safety is paramount. A modern coach driven by an experienced professional driver ensures that everyone travels comfortably in an air-conditioned vehicle with spacious luggage compartments. Furthermore, a coach bus offers direct door-to-door transportation from our university straight to our hotel in the mountain city, saving us time and hassle.\n\nIn contrast, I strongly advise against traveling by motorbikes in a convoy. Riding over 200 kilometers on winding mountain passes poses severe safety risks, especially for inexperienced student riders exposed to sudden rain or heavy trucks. As for the express train, while it is comfortable, the railway station is located 15 kilometers away from our hotel, which would require hiring additional taxis and paying extra transfer fees.\n\nIn conclusion, the private coach bus strikes the perfect balance between safety, comfort, and convenience for our class.",
      modelAnswerPhonetics: "/ɪf aɪ wɜː tuː meɪk ðə dɪˈsɪʒən fɔːr aʊər klɑːs trɪp.../"
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
        "beloved educator (nhà giáo đáng kính / kính yêu)",
        "lifelong passion for reading (đam mê đọc sách cả đời)",
        "intellectual companion (người bạn đồng hành trí tuệ)",
        "lasting keepsake (kỷ vật lâu bền theo năm tháng)",
        "limited practical utility (giá trị sử dụng thực tế hạn chế)",
        "transitory in nature (mang tính chất tạm thời, mau trôi qua)",
        "tangible physical memory (kỷ niệm hữu hình có thể lưu giữ)",
        "eye-friendly screen technology (công nghệ màn hình bảo vệ mắt)",
        "honor her lifelong dedication (tôn vinh sự cống hiến trọn đời)"
      ],
      tips: [
        "Step 1 - Opening (15s): Express respect and gratitude ('To express our profound gratitude to our beloved English teacher... I would definitely pick Option C').",
        "Step 2 - Justify E-Reader (60s): Connect with her 35-year passion for literature, eye-friendly adjustable font size, and long-term daily utility in retirement.",
        "Step 3 - Reject Pen & Spa (60s): Pen has little practical utility after retirement; Spa is transitory (lasts only hours with no tangible physical keepsake).",
        "Step 4 - Conclusion (15s): Emphasize that the e-reader is both practical, thoughtful, and enduring."
      ],
      pronunciationGuide: {
        english: {
          phonetic: "/tuː ɪksˈprɛs aʊər prəˈfaʊnd ˈɡrætɪtjuːd... aɪ wʊd ˈdɛfɪnɪtli pɪk ˈɒpʃən siː/",
          intonation: "Use warm, appreciative and respectful intonation contour when describing the teacher's career.",
          stressAndLinking: "Pronounce key words: 'GRAT-i-tude', 'PRO-found', 'LIT-er-a-ture'. Link 'express_our', 'pick_Option_C'."
        },
        vietnamese: {
          huongDanPhatAm: "Từ 'gratitude' phát âm /ˈɡræt.ɪ.tjuːd/, 'profound' /prəˈfaʊnd/, 'transitory' /ˈtræn.zɪ.tər.i/.",
          nguDieuVaNhanGiong: "Thể hiện sự trân trọng và tình cảm tri ân sâu sắc trong giọng nói khi nhắc đến cô giáo về hưu.",
          meoTraLoi: "Liên hệ trực tiếp đến đặc thù giáo viên (yêu sách, nghỉ hưu cần thư giãn trí tuệ) để lập luận thuyết phục."
        }
      },
      languageInputB1: {
        targetBand: "B1",
        levelName: "Target Band B1 (Intermediate 4.0 - 5.5)",
        levelGoal: "Vốn từ vựng tình cảm và quà tặng gần gũi, câu văn ngắn gọn giải thích sở thích đọc sách của cô giáo và tính lâu bền của món quà.",
        vocabulary: [
          { phrase: "say thank you / express thanks", meaningVi: "nói lời cảm ơn, tri ân", type: "Chủ đề chính" },
          { phrase: "retirement gift", meaningVi: "món quà mừng về hưu", type: "Chủ đề chính" },
          { phrase: "love reading books", meaningVi: "rất yêu thích đọc sách", type: "Lý do lựa chọn" },
          { phrase: "digital e-book reader", meaningVi: "máy đọc sách điện tử", type: "Món quà chọn" },
          { phrase: "store hundreds of classic books", meaningVi: "chứa hàng trăm cuốn sách kinh điển", type: "Tính năng" },
          { phrase: "easy on her eyes", meaningVi: "dịu mắt, không gây mỏi mắt người lớn tuổi", type: "Lợi ích" },
          { phrase: "just sit on the desk", meaningVi: "chỉ nằm yên trên bàn (không dùng tới)", type: "Lý do bác bỏ" },
          { phrase: "lasting gift for many years", meaningVi: "món quà bền lâu dùng được nhiều năm", type: "Lợi ích" }
        ],
        transitionPhrases: [
          "To say thank you to our teacher, I think ... is the best idea.",
          "First, our teacher has taught English for 35 years, so ...",
          "Second, I don't choose the pen because ...",
          "Also, I do not choose the spa gift card because ...",
          "To sum up, ... is the most practical present."
        ],
        sentenceFrames: [
          {
            stage: "1. Mở bài & Chọn lựa (Opening & Choice)",
            templates: [
              "To say thank you to our English teacher on her retirement, I think giving her a digital e-book reader is the best idea.",
              "In my opinion, Option C is the most meaningful gift for our teacher."
            ]
          },
          {
            stage: "2. Nêu 2 lý do chọn (Supporting Reasons)",
            templates: [
              "First, she has taught English for 35 years, so reading is her biggest hobby.",
              "Second, an e-book reader can store hundreds of classic books, and she can make the font size bigger so it is easy on her eyes."
            ]
          },
          {
            stage: "3. Bác bỏ 2 lựa chọn còn lại (Rejecting Alternatives)",
            templates: [
              "Second, I don't choose the fountain pen because she will not grade papers anymore, so the pen will just sit on the desk.",
              "Also, I do not choose the spa card because a spa massage only lasts for a few hours and leaves no lasting gift."
            ]
          },
          {
            stage: "4. Kết luận ngắn gọn (Conclusion)",
            templates: [
              "To sum up, the digital e-book reader is the most practical and meaningful present for our teacher."
            ]
          }
        ],
        responseFormula: [
          "Bước 1: Nêu mục đích tặng quà và chọn Option C ('To say thank you to our teacher, I think [Option C] is the best idea.').",
          "Bước 2: Nêu 2 lý do phù hợp với người về hưu (thích đọc sách + chỉnh chữ to dễ nhìn).",
          "Bước 3: Bác bỏ bút viết (không còn chấm bài) và voucher spa (hết sau vài giờ, không lưu giữ được).",
          "Bước 4: Khẳng định lại ý nghĩa lâu dài của máy đọc sách."
        ],
        pronunciationGuide: {
          phonetics: "/tuː seɪ θæŋk juː tuː aʊər ˈtiːʧər, aɪ θɪŋk ˈɒpʃən siː ɪz ðə bɛst/",
          intonation: "Giữ âm lượng ấm áp, ngắt giọng rõ ràng sau cụm mở đầu.",
          stressAndLinking: "Phát âm chuẩn âm /θ/ trong 'thank you', 'thoughtful', âm /d/ trong 'read', 'store'.",
          vietnameseAdvice: "Nói rõ ràng và chân thành. Tránh nói quá nhanh gây nuốt âm cuối."
        }
      },
      languageInputB2: {
        targetBand: "B2",
        levelName: "Target Band B2 (Upper-Intermediate 6.0 - 8.0)",
        levelGoal: "Sử dụng ngôn ngữ tri ân trang trọng, phân tích sâu sắc giữa giá trị biểu tượng (symbolic), giá trị tức thời (transitory) và giá trị bền vững (enduring companion).",
        vocabulary: [
          { phrase: "express our profound gratitude", meaningVi: "bày tỏ lòng biết ơn sâu sắc và chân thành", type: "Formal Expression" },
          { phrase: "lifelong passion for literature", meaningVi: "niềm đam mê văn học cháy bỏng suốt đời", type: "Collocation" },
          { phrase: "intellectual companion", meaningVi: "người bạn đồng hành nuôi dưỡng trí tuệ", type: "Collocation" },
          { phrase: "lasting keepsake / memento", meaningVi: "kỷ vật lưu niệm trường tồn theo thời gian", type: "Noun Phrase" },
          { phrase: "limited practical utility", meaningVi: "giá trị sử dụng thực tế rất hạn chế", type: "Collocation" },
          { phrase: "transitory in nature", meaningVi: "bản chất chỉ mang tính nhất thời, ngắn ngủi", type: "Academic Phrase" },
          { phrase: "tangible physical memory", meaningVi: "kỷ niệm hữu hình có thể cầm nắm lưu giữ", type: "Noun Phrase" },
          { phrase: "eye-friendly adjustable typography", meaningVi: "công nghệ hiển thị bảo vệ mắt người cao tuổi", type: "Noun Phrase" },
          { phrase: "honor her lifelong dedication", meaningVi: "tôn vinh sự nghiệp cống hiến trọn đời cho giáo dục", type: "Collocation" },
          { phrase: "undisputed optimal choice", meaningVi: "lựa chọn tối ưu không thể bàn cãi", type: "Collocation" }
        ],
        transitionPhrases: [
          "To express our profound gratitude to our beloved English teacher on her retirement, I would definitely pick ...",
          "As an educator who has dedicated 35 years to ..., ... is undoubtedly her lifelong passion.",
          "On the other hand, although an engraved pen is an elegant symbol, ...",
          "Meanwhile, a health spa voucher, though relaxing, is transitory in nature; ...",
          "Therefore, ... is the most practical, thoughtful, and enduring gift to honor her lifelong dedication."
        ],
        sentenceFrames: [
          {
            stage: "1. Respectful Opening & Thesis",
            templates: [
              "To express our profound gratitude to our beloved teacher on her retirement, I would definitely pick Option C: a digital e-book reader.",
              "In honoring our teacher's 35-year illustrious teaching career, Option C stands out as the most meaningful tribute."
            ]
          },
          {
            stage: "2. Deep Intellectual Alignment",
            templates: [
              "As an educator who has dedicated her life to literature, reading is undoubtedly her lifelong passion, making an e-reader the perfect intellectual companion.",
              "Furthermore, its eye-friendly screen and customizable font sizes ensure effortless daily reading throughout her peaceful retirement."
            ]
          },
          {
            stage: "3. Nuanced Analytical Dismissal",
            templates: [
              "On the other hand, although an engraved fountain pen is an elegant symbol of pedagogy, it possesses limited utility once grading duties cease.",
              "Meanwhile, a spa package is inherently transitory; once the session concludes, no tangible keepsake remains to remember our class by."
            ]
          },
          {
            stage: "4. Enduring Conclusion",
            templates: [
              "Therefore, the e-book reader represents the perfect synergy of thoughtfulness, practical utility, and enduring sentiment."
            ]
          }
        ],
        responseFormula: [
          "Bước 1: Mở bài với ngôn từ tri ân trang trọng ('To express our profound gratitude... I would definitely pick Option C').",
          "Bước 2: Phân tích sự tương thích hoàn hảo giữa máy đọc sách và tình yêu văn học 35 năm của cô giáo ('intellectual companion', 'eye-friendly').",
          "Bước 3: Phản biện mang tính triết lý đối với Bút (chỉ mang tính biểu tượng nhưng ít dùng thực tế) và Spa (trải nghiệm nhất thời, thiếu tính lưu niệm hữu hình).",
          "Bước 4: Đúc kết khẳng định món quà là sự tôn vinh trọn vẹn cho sự cống hiến của cô giáo."
        ],
        pronunciationGuide: {
          phonetics: "/tuː ɪksˈprɛs aʊər prəˈfaʊnd ˈɡrætɪtjuːd... aɪ wʊd ˈdɛfɪnɪtli pɪk ˈɒpʃən siː/",
          intonation: "Ngữ điệu trầm ấm, giàu cảm xúc, nhấn trọng âm rõ ràng ở các tính từ tri ân (proFOUND, beLOVED, enDURING).",
          stressAndLinking: "Liaisons mượt mà: 'profound_gratitude', 'intellectual_companion', 'honor_her_dedication'.",
          vietnameseAdvice: "Thể hiện thái độ kính trọng qua ngữ điệu truyền cảm. Từng luận điểm phân tích sâu sắc, rành mạch."
        }
      },
      modelAnswerB1: "To say thank you to our English teacher on her retirement, I think giving her a digital e-book reader is the best idea.\n\nFirst, our teacher has taught English for 35 years, so she loves reading books very much. An e-book reader can store hundreds of classic literature books, and she can adjust the font size bigger so it is easy on her eyes.\n\nSecond, I don't choose the fountain pen because she is retiring from teaching, so she will not write or grade papers every day anymore. The pen will just sit on the desk.\n\nAlso, I do not choose the spa gift card because a spa massage only lasts for a few hours and then it is gone. An e-book reader is a lasting gift she can use for many years.\n\nTo sum up, the digital e-book reader is the most practical and meaningful present for our beloved teacher.",
      modelAnswerB2: "To express our profound gratitude to our beloved English teacher on her retirement, I would definitely pick Option C: a digital e-book reader pre-loaded with classic literature. As an educator who has dedicated 35 years to language and literature, reading is undoubtedly her lifelong passion. An e-reader with an eye-friendly screen and adjustable font sizes will allow her to enjoy thousands of books effortlessly during her peaceful retirement years. It is both a practical intellectual companion and a lasting keepsake from our class.\n\nOn the other hand, although an engraved fountain pen is an elegant symbol of teaching, it has limited practical utility once a teacher stops grading papers daily and will likely end up sitting inside a display cabinet. Meanwhile, a health spa voucher, though relaxing, is transitory in nature; once the massage session ends, no tangible physical memory remains.\n\nTherefore, the e-book reader is the most practical, thoughtful, and enduring gift to honor our teacher's lifelong dedication.",
      modelAnswer: "To express our profound gratitude to our beloved English teacher on her retirement, I would definitely pick Option C: a digital e-book reader pre-loaded with classic literature. As an educator who has dedicated 35 years to language and literature, reading is undoubtedly her lifelong passion. An e-reader with an eye-friendly screen and adjustable font sizes will allow her to enjoy thousands of books effortlessly during her peaceful retirement years. It is both a practical intellectual companion and a lasting keepsake from our class.\n\nOn the other hand, although an engraved fountain pen is an elegant symbol of teaching, it has limited practical utility once a teacher stops grading papers daily and will likely end up sitting inside a display cabinet. Meanwhile, a health spa voucher, though relaxing, is transitory in nature; once the massage session ends, no tangible physical memory remains.\n\nTherefore, the e-book reader is the most practical, thoughtful, and enduring gift to honor our teacher's lifelong dedication.",
      modelAnswerPhonetics: "/tuː ɪksˈprɛs aʊər prəˈfaʊnd ˈɡrætɪtjuːd tuː aʊər bɪˈlʌvɪd ˈtiːʧər.../"
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
        "urgent goal (mục tiêu cấp bách trong thời gian ngắn)",
        "tailored curriculum (chương trình được cá nhân hóa)",
        "maximize speaking output (tối đa hóa thời lượng thực hành nói)",
        "instant constructive feedback (góp ý sửa lỗi tức thì mang tính xây dựng)",
        "fast-track progress (đẩy nhanh tiến độ vượt bậc)",
        "diluted individual speaking time (thời gian luyện nói bị phân tán, chia nhỏ)",
        "casual conversations lack structure (trò chuyện ngẫu hứng thiếu bài bản)",
        "perpetuate bad speech habits (duy trì thói quen phát âm sai)",
        "job interview simulations (mô phỏng phỏng vấn xin việc)",
        "guarantee interview success (đảm bảo thành công trong kỳ phỏng vấn)"
      ],
      tips: [
        "Step 1 - Opening (15s): State your urgent 6-month timeline and select Option B ('Given my urgent goal of mastering English speaking within 6 months... I strongly favor Option B').",
        "Step 2 - Justify 1-on-1 Tutor (60s): Highlight 100% speaking time, customized mock interview scenarios, and instant pronunciation/grammar correction.",
        "Step 3 - Reject Academy & Club (60s): Academy dilutes speaking time to 5-10 mins with fixed generic syllabus; Club is too casual with no teacher correction.",
        "Step 4 - Conclusion (15s): Reiterate that a 1-on-1 tutor delivers the fastest return on investment for interview success."
      ],
      pronunciationGuide: {
        english: {
          phonetic: "/ˈɡɪvən maɪ ˈɜːʤənt ɡəʊl... aɪ wʊd ˈstrɒŋli ˈfeɪvər ˈɒpʃən biː/",
          intonation: "Use sharp rising intonation on constraints (6 months↗, interviews↗) and strong assertive fall on decision (TUTOR↘).",
          stressAndLinking: "Stress keywords: 'CUS-tom-ized', 'CON-struc-tive', 'SIM-u-la-tion'. Link 'speaking_output', 'rule_it_out'."
        },
        vietnamese: {
          huongDanPhatAm: "Từ 'urgent' phát âm /ˈɜː.dʒənt/, 'tailored' /ˈteɪ.ləd/, 'simulation' /ˌsɪm.jəˈleɪ.ʃən/.",
          nguDieuVaNhanGiong: "Nhấn mạnh mốc thời gian gấp rút 'within just 6 months' để làm nổi bật tính cấp thiết của việc chọn gia sư 1-1.",
          meoTraLoi: "Đưa ra mục tiêu 6 tháng làm tiêu chí quyết định cốt lõi: thời gian ngắn cần học tập trung 1-1."
        }
      },
      languageInputB1: {
        targetBand: "B1",
        levelName: "Target Band B1 (Intermediate 4.0 - 5.5)",
        levelGoal: "Từ vựng học tập trực diện, cấu trúc so sánh lợi ích giữa học 1-1 và học lớp đông người, diễn đạt đơn giản và rõ ràng.",
        vocabulary: [
          { phrase: "improve English speaking", meaningVi: "cải thiện kỹ năng nói tiếng Anh", type: "Chủ đề chính" },
          { phrase: "in 6 months for job interviews", meaningVi: "trong 6 tháng để phỏng vấn xin việc", type: "Mục tiêu" },
          { phrase: "1-on-1 private native tutor", meaningVi: "gia sư bản xứ 1 kèm 1 online", type: "Phương án chọn" },
          { phrase: "practice during the whole lesson", meaningVi: "thực hành nói trong suốt cả buổi học", type: "Lợi ích" },
          { phrase: "correct mistakes immediately", meaningVi: "sửa lỗi sai ngay lập tức", type: "Lợi ích" },
          { phrase: "15 students in the class", meaningVi: "15 học viên trong một lớp", type: "Thực trạng" },
          { phrase: "speak for only 5 to 10 minutes", meaningVi: "chỉ được nói 5 đến 10 phút", type: "Lý do bác bỏ" },
          { phrase: "nobody corrects my mistakes", meaningVi: "không có ai sửa lỗi sai cho mình", type: "Lý do bác bỏ" }
        ],
        transitionPhrases: [
          "If I need to improve my speaking in 6 months, I would choose ...",
          "First, with a 1-on-1 tutor, I can ...",
          "Second, I don't choose the classroom course because ...",
          "Also, I do not choose the English club because ...",
          "In conclusion, a 1-on-1 native tutor is the fastest way ..."
        ],
        sentenceFrames: [
          {
            stage: "1. Mở bài & Chọn lựa (Opening & Choice)",
            templates: [
              "If I need to improve my English speaking in 6 months for job interviews, I would choose hiring a 1-on-1 private native tutor online.",
              "In my opinion, Option B is the best learning method for my urgent goal."
            ]
          },
          {
            stage: "2. Nêu 2 lý do chọn (Supporting Reasons)",
            templates: [
              "First, with a 1-on-1 tutor, I can practice speaking during the whole 60 minutes and practice interview questions.",
              "Second, the tutor can correct my pronunciation and grammar errors immediately, which helps me improve very fast."
            ]
          },
          {
            stage: "3. Bác bỏ 2 lựa chọn còn lại (Rejecting Alternatives)",
            templates: [
              "Second, I don't choose the academy course because with 15 students, each student only speaks for 5 minutes.",
              "Also, I reject the English club because people only chat casually and nobody corrects my mistakes."
            ]
          },
          {
            stage: "4. Kết luận ngắn gọn (Conclusion)",
            templates: [
              "In conclusion, a 1-on-1 native tutor is the fastest and most effective way for me to pass job interviews in 6 months."
            ]
          }
        ],
        responseFormula: [
          "Bước 1: Nêu mục tiêu cấp bách (6 tháng phỏng vấn) và chọn gia sư 1-1 ('If I need to improve my English speaking in 6 months..., I would choose [Option B]').",
          "Bước 2: Nêu 2 điểm vượt trội của học 1-1 (100% thời gian nói + được sửa lỗi tức thì).",
          "Bước 3: Bác bỏ lớp học trung tâm (lớp đông chỉ được nói 5 phút) và CLB (nói chuyện phiếm, không ai sửa lỗi).",
          "Bước 4: Kết luận khẳng định đây là cách nhanh nhất để đạt mục tiêu."
        ],
        pronunciationGuide: {
          phonetics: "/ɪf aɪ niːd tuː ɪmˈpruːv maɪ ˈspiːkɪŋ, aɪ wʊd ʧuːz ə ˈtjuːtər/",
          intonation: "Hạ giọng dứt khoát khi chốt lý do, nhấn vào 'whole lesson', 'immediately', 'fastest'.",
          stressAndLinking: "Phát âm rõ đuôi /t/ và /s/ trong 'months', 'interviews', 'mistakes', 'fastest'.",
          vietnameseAdvice: "Tự tin, duy trì luồng nói liên tục. Nhớ nhắc đến mốc '6 months' để câu trả lời có tính liên kết chặt chẽ."
        }
      },
      languageInputB2: {
        targetBand: "B2",
        levelName: "Target Band B2 (Upper-Intermediate 6.0 - 8.0)",
        levelGoal: "Sử dụng từ vựng chuyên sâu về phương pháp luận giảng dạy, phân tích hiệu suất đầu tư thời gian (time-efficiency / speaking output) và lập luận phản biện sắc sảo.",
        vocabulary: [
          { phrase: "urgent goal / tight timeframe", meaningVi: "mục tiêu cấp bách trong khung thời gian eo hẹp", type: "Collocation" },
          { phrase: "strongly favor / advocate Option B", meaningVi: "nghiêng hẳn về / ủng hộ mạnh mẽ Phương án B", type: "Collocation" },
          { phrase: "customized 1-on-1 training", meaningVi: "huấn luyện 1 kèm 1 được thiết kế may đo riêng", type: "Noun Phrase" },
          { phrase: "maximize active speaking output", meaningVi: "tối đa hóa thời lượng đầu ra thực hành nói", type: "Collocation" },
          { phrase: "instant constructive feedback", meaningVi: "nhận xét sửa lỗi mang tính xây dựng ngay tức khắc", type: "Collocation" },
          { phrase: "fast-track my communicative progress", meaningVi: "đẩy nhanh vượt bậc tiến độ giao tiếp", type: "Collocation" },
          { phrase: "diluted individual speaking time", meaningVi: "thời gian luyện nói cá nhân bị phân tán loãng", type: "Noun Phrase" },
          { phrase: "rigid generic curriculum", meaningVi: "giáo trình chung chung, thiếu tính linh hoạt", type: "Noun Phrase" },
          { phrase: "perpetuate uncorrected speech errors", meaningVi: "vô tình duy trì các lỗi sai phát âm không được sửa", type: "Academic Phrase" },
          { phrase: "undeniably the most effective strategy", meaningVi: "không thể phủ nhận là chiến lược hiệu quả nhất", type: "Collocation" }
        ],
        transitionPhrases: [
          "Given my urgent goal of mastering English speaking within just 6 months for ..., I would strongly favor ...",
          "In a tight timeframe, efficiency and customized training are vital.",
          "Furthermore, receiving instant feedback on ... will fast-track my progress far quicker than ...",
          "Conversely, I would turn down the intensive classroom course because ...",
          "Similarly, while joining an English club is ..., ...",
          "In conclusion, investing in ... is undeniably the most effective strategy to guarantee interview success."
        ],
        sentenceFrames: [
          {
            stage: "1. Time-Bound Opening & Strategic Stance",
            templates: [
              "Given my urgent goal of mastering English speaking within just 6 months for international job interviews, I would strongly favor Option B: hiring a 1-on-1 private native tutor.",
              "With a stringent 6-month deadline before corporate job interviews, personalized 1-on-1 tutoring is unequivocally the superior choice."
            ]
          },
          {
            stage: "2. High-Efficiency Pedagogy Justification",
            templates: [
              "In a tight timeframe, efficiency and tailored training are vital, and a 1-on-1 tutor guarantees 100% active speaking time focused entirely on mock interviews.",
              "Furthermore, receiving instant constructive feedback on pronunciation and grammatical subtleties fast-tracks progress far beyond traditional methods."
            ]
          },
          {
            stage: "3. Rigorous Critique of Group Formats",
            templates: [
              "Conversely, I would turn down the classroom course because in a class of 15 students, individual speaking output is diluted to barely 10 minutes, and the generic syllabus moves too slowly.",
              "Similarly, while casual English clubs are enjoyable, unsupervised conversations with peers lack professional correction, allowing flawed speech habits to persist."
            ]
          },
          {
            stage: "4. Return-on-Investment Synthesis",
            templates: [
              "In conclusion, investing in a dedicated native tutor is undeniably the most targeted strategy to guarantee interview fluency within 6 months."
            ]
          }
        ],
        responseFormula: [
          "Bước 1: Mở đầu ấn tượng kết hợp khung thời gian cấp thiết ('Given my urgent goal of mastering English speaking within just 6 months...').",
          "Bước 2: Khẳng định tính ưu việt của mô hình 1-1 bằng các thuật ngữ sư phạm cao cấp ('tailored curriculum', 'active speaking output', 'instant constructive feedback').",
          "Bước 3: Phản biện sắc bén lớp học truyền thống (thời gian nói bị 'diluted', giáo trình 'generic') và câu lạc bộ (thiếu tính học thuật, 'perpetuates uncorrected errors').",
          "Bước 4: Chốt hạ kết luận khẳng định đây là chiến lược đầu tư mang lại hiệu quả cao nhất."
        ],
        pronunciationGuide: {
          phonetics: "/ˈɡɪvən maɪ ˈɜːʤənt ɡəʊl... aɪ wʊd ˈstrɒŋli ˈfeɪvər ˈɒpʃən biː/",
          intonation: "Ngữ điệu thuyết phục, biến thiên linh hoạt giữa câu điều kiện, câu nhượng bộ (Conversely↗, Similarly↗) và hạ giọng quyết đoán.",
          stressAndLinking: "Trọng âm rõ nét: 'cus-tom-IZED', 'con-STRUC-tive', 'di-LU-ted'. Nuốt âm và nối âm chuẩn xác.",
          vietnameseAdvice: "Tập trung thể hiện tư duy phân tích chiến lược sắc bén. Tốc độ nói trôi chảy, chuyên nghiệp."
        }
      },
      modelAnswerB1: "If I need to improve my English speaking in 6 months for job interviews, I would choose hiring a 1-on-1 private native tutor online.\n\nFirst, with a 1-on-1 tutor, I can practice speaking during the whole lesson. The tutor can help me practice job interview questions and correct my pronunciation and grammar errors immediately. This helps me improve very quickly in 6 months.\n\nSecond, I don't choose the classroom course at an academy because there are 15 students in the class, so each student only speaks for 5 to 10 minutes. It is too slow for my urgent goal.\n\nAlso, I do not choose the English club because people there just chat casually and nobody corrects my mistakes.\n\nIn conclusion, a 1-on-1 native tutor is the fastest and most effective way for me to pass my job interviews.",
      modelAnswerB2: "Given my urgent goal of mastering English speaking within just 6 months for international job interviews, I would strongly favor Option B: hiring a 1-on-1 private online native tutor. In a tight timeframe, efficiency and customized training are vital. A 1-on-1 tutor provides 100% speaking time during every lesson, tailored directly to job interview scenarios and professional terminology. Furthermore, receiving instant feedback on my pronunciation and grammatical errors will fast-track my progress far quicker than traditional methods.\n\nConversely, I would turn down the intensive classroom course at an academy because in a class of 15 students, individual speaking time is diluted to barely 10 minutes per session, and the generic curriculum moves too slowly for job preparation. Similarly, while joining an English club is fun and cheap, casual conversations with peers lack professional correction, allowing bad speech habits to persist uncorrected.\n\nIn conclusion, investing in a 1-on-1 native tutor is undeniably the most effective strategy to guarantee job interview success in 6 months.",
      modelAnswer: "Given my urgent goal of mastering English speaking within just 6 months for international job interviews, I would strongly favor Option B: hiring a 1-on-1 private online native tutor. In a tight timeframe, efficiency and customized training are vital. A 1-on-1 tutor provides 100% speaking time during every lesson, tailored directly to job interview scenarios and professional terminology. Furthermore, receiving instant feedback on my pronunciation and grammatical errors will fast-track my progress far quicker than traditional methods.\n\nConversely, I would turn down the intensive classroom course at an academy because in a class of 15 students, individual speaking time is diluted to barely 10 minutes per session, and the generic curriculum moves too slowly for job preparation. Similarly, while joining an English club is fun and cheap, casual conversations with peers lack professional correction, allowing bad speech habits to persist uncorrected.\n\nIn conclusion, investing in a 1-on-1 native tutor is undeniably the most effective strategy to guarantee job interview success in 6 months.",
      modelAnswerPhonetics: "/ˈɡɪvən maɪ ˈɜːʤənt ɡəʊl əv ˈmɑːstərɪŋ ˈɪŋɡlɪʃ ˈspiːkɪŋ.../"
    }
  }
];
