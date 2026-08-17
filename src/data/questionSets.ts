import { QuestionSet } from "../types";

export const QUESTION_SETS: QuestionSet[] = [
  {
    id: "set-1",
    title: "Set 1: Weekend Activity for Friends",
    level: "Target Band B2 (6.0 - 8.0)",
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
        "Step 1 - Introduction (15s): Rephrase the situation and state your final choice clearly (e.g. 'If I were faced with this decision, I would definitely opt for...').",
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
      modelAnswerB1: "In my opinion, going on a camping trip in the forest is the best choice for our group of university friends.\n\nFirst, camping in the forest is very cheap, so it is suitable for our student budget after finishing our exams. We can set up tents, cook around a campfire, and enjoy fresh air together. This will help us relax and become closer friends.\n\nSecond, I do not choose the beach resort because the hotel rooms and seafood restaurants there are very expensive, especially on weekends. It is too costly for us.\n\nAlso, I reject the city tour and museum visit because we already live and study in the city every day. Going to museums will feel boring and not like a real holiday.\n\nIn conclusion, a camping trip in the forest is the most fun and affordable choice for our group.",
      modelAnswerB2: "Among the three options provided, I strongly believe that a camping trip in the forest is the best choice for our group of university friends. First and foremost, after an exhausting semester of final exams, immersed in books and computer screens, spending time in nature offers a wonderful way to recharge our mental batteries and breathe fresh air. Moreover, camping is highly cost-effective for university students who usually operate on a tight budget. Setting up tents, gathering around an evening campfire, and singing songs together will surely create unforgettable bonding memories.\n\nOn the other hand, I would rule out the beach resort getaway primarily due to its exorbitant accommodation costs, especially during peak seasons, which might pose a financial burden for some friends in our group. Similarly, I find the cultural city tour less appealing because walking through museums in a noisy city feels too similar to our everyday urban routine, failing to give us a true escape.\n\nAll things considered, considering our student budget and need for relaxation, the forest camping trip is undoubtedly the most suitable option.",
      modelAnswer: "Among the three options provided, I strongly believe that a camping trip in the forest is the best choice for our group of university friends. First and foremost, after an exhausting semester of final exams, immersed in books and computer screens, spending time in nature offers a wonderful way to recharge our mental batteries and breathe fresh air. Moreover, camping is highly cost-effective for university students who usually operate on a tight budget. Setting up tents, gathering around an evening campfire, and singing songs together will surely create unforgettable bonding memories.\n\nOn the other hand, I would rule out the beach resort getaway primarily due to its exorbitant accommodation costs, especially during peak seasons, which might pose a financial burden for some friends in our group. Similarly, I find the cultural city tour less appealing because walking through museums in a noisy city feels too similar to our everyday urban routine, failing to give us a true escape.\n\nAll things considered, considering our student budget and need for relaxation, the forest camping trip is undoubtedly the most suitable option.",
      modelAnswerPhonetics: "/əˈmʌŋ ðə θriː ˈɒpʃənz prəˈvaɪdɪd, aɪ strɒŋli bɪˈliːv ðæt ə ˈkæmpɪŋ trɪp.../"
    }
  },
  {
    id: "set-2",
    title: "Set 2: Travel Transport for Class Trip",
    level: "Target Band B2 (6.0 - 8.0)",
    description: "Selecting transport to a mountain town 200 km away: private coach bus, motorbikes, or express train.",
    iconName: "Bus",
    question: {
      id: "part2-set-2",
      situationTitle: "Choosing Transportation for a Class Trip",
      situation: "Your university class of 30 students is planning a 200 km excursion to a scenic mountain city. You need to choose the best mode of transportation. Three options are proposed: hiring a private coach bus, traveling on motorbikes in a convoy, or taking the express passenger train.",
      options: [
        {
          id: "opt-a",
          label: "Option A",
          title: "Hiring a Private Coach Bus",
          description: "Renting a modern 35-seater air-conditioned coach with a professional driver.",
          advantages: [
            "Accommodates the whole class together with high safety",
            "Comfortable reclining seats with air conditioning",
            "Direct door-to-door transport with luggage space"
          ],
          disadvantages: [
            "Fixed route schedule without spontaneous stopovers",
            "Some students may suffer from motion sickness"
          ]
        },
        {
          id: "opt-b",
          label: "Option B",
          title: "Motorbikes in a Convoy",
          description: "Riding personal motorbikes together along mountain highways.",
          advantages: [
            "Thrilling adventurous feel and scenic roadside stops",
            "Maximum flexibility to pause whenever desired"
          ],
          disadvantages: [
            "High safety risk on steep winding mountain roads",
            "Physical fatigue and rain exposure"
          ]
        },
        {
          id: "opt-c",
          label: "Option C",
          title: "Express Passenger Train",
          description: "Booking a dedicated carriage on the regional passenger train line.",
          advantages: [
            "Scenic window views and smooth travel journey",
            "Spacious legroom and onboard restrooms"
          ],
          disadvantages: [
            "Train station is 15 km away from the final destination",
            "Fixed departure times and rigid ticket cancellation policies"
          ]
        }
      ],
      prompt: "Which mode of transport would you recommend for your class trip? Explain your choice and why the other options are not ideal.",
      keywords: [
        "recommend without hesitation (tiến cử không ngần ngại)",
        "safety is paramount (an toàn là trên hết)",
        "large headcount (sĩ số đông)",
        "door-to-door convenience (tiện lợi tận nơi)",
        "unforeseen weather hazards (hiểm họa thời tiết không lường trước)",
        "winding mountain passes (đèo núi ngoằn ngoèo)",
        "logistical hassle (phiền phức về hậu cần)",
        "a well-balanced compromise (sự dung hòa hợp lý)"
      ],
      tips: [
        "Highlight group size (30 students) as a key decision factor.",
        "Pick Option A (Coach Bus) due to group safety, comfort, and direct luggage transport.",
        "Reject Option B (Motorbikes) due to major road safety hazards on 200km mountain passes.",
        "Reject Option C (Train) due to extra shuttle transfers needed from the station to the hotel."
      ],
      pronunciationGuide: {
        english: {
          phonetic: "/haɪərɪŋ ə ˈpraɪvɪt kəʊʧ bʌs ɪz ˈdɛfɪnɪtli ðə saɪfɪst ænd məʊst kənˈviːniənt ˈɒpʃən/",
          intonation: "Use steady falling intonation for definitive points, and rising tone on contrast markers.",
          stressAndLinking: "Stress: 'SAFETY', 'COACH BUS', 'PARAMOUNT'. Link: 'coach_bus', 'door_to_door'."
        },
        vietnamese: {
          huongDanPhatAm: "Từ 'paramount' /ˈpær.ə.maʊnt/, 'convoy' /ˈkɒn.vɔɪ/. Lưu ý âm cuối /t/ trong 'paramount'.",
          nguDieuVaNhanGiong: "Nhấn giọng vào tính từ thể hiện tiêu chí quan trọng nhất: 'safety', 'convenience', 'cost-efficiency'.",
          meoTraLoi: "Dùng từ nối chuyển ý như 'First and foremost', 'When it comes to Option B...', 'Regarding the train...' để phần nói mạch lạc."
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
    title: "Set 3: Retirement Gift for Teacher",
    level: "Target Band B2 (6.0 - 8.0)",
    description: "Choosing a farewell present for a beloved teacher: custom fountain pen, health spa card, or e-book reader.",
    iconName: "Gift",
    question: {
      id: "part2-set-3",
      situationTitle: "Selecting a Retirement Farewell Gift",
      situation: "Your high school alumni group wants to buy a meaningful farewell gift for your respected English teacher who is retiring after 35 years of teaching. Three gift proposals are put forward: an engraved high-end fountain pen, a wellness massage & health spa gift card, or a digital e-book reader pre-loaded with classic literature.",
      options: [
        {
          id: "opt-a",
          label: "Option A",
          title: "An Engraved High-End Fountain Pen",
          description: "A premium metal fountain pen customized with the teacher's name and graduation year.",
          advantages: [
            "Timeless keepsake representing academic dedication",
            "Personalized emotional value with custom engraving"
          ],
          disadvantages: [
            "Rarely used daily after retirement from teaching",
            "Mainly serves as a decorative display item"
          ]
        },
        {
          id: "opt-b",
          label: "Option B",
          title: "A Wellness Massage & Health Spa Gift Card",
          description: "A comprehensive health checkup and weekend relaxation massage package at a top spa.",
          advantages: [
            "Promotes health and physical relaxation after years of hard work",
            "Thoughtful gesture showing care for well-being"
          ],
          disadvantages: [
            "Temporary experience that disappears once used",
            "Some elderly teachers might feel uncomfortable in commercial spa venues"
          ]
        },
        {
          id: "opt-c",
          label: "Option C",
          title: "A Digital E-Book Reader Pre-loaded with Classics",
          description: "An eye-friendly e-reader loaded with hundreds of world literature masterpieces.",
          advantages: [
            "Combines intellectual stimulation with long-term leisure reading",
            "Adjustable large fonts that protect aging eyes",
            "Durable gift that lasts for many years"
          ],
          disadvantages: [
            "Older teachers may need brief guidance to operate touchscreen devices"
          ]
        }
      ],
      prompt: "Which gift option do you consider the most meaningful and practical? Justify your selection and explain why the other choices were turned down.",
      keywords: [
        "meaningful token of gratitude (món quà tri ân ý nghĩa)",
        "a lifelong passion for reading (niềm đam mê đọc sách đời người)",
        "eye-friendly paper-like display (màn hình hiển thị bảo vệ mắt)",
        "intellectual companion (bạn đồng hành trí tuệ)",
        "transitory nature (bản chất ngắn hạn, qua đi nhanh)",
        "merely symbolic (chỉ mang tính biểu tượng)",
        "practical utility (giá trị sử dụng thực tế)",
        "express profound appreciation (thể hiện lòng biết ơn sâu sắc)"
      ],
      tips: [
        "Relate the gift to the teacher's background (an English teacher who loves reading).",
        "Choose Option C (E-book Reader) as it combines passion for literature, eye-care technology, and lasting memory.",
        "Reject Option A (Fountain Pen) as mostly symbolic once teaching duties end.",
        "Reject Option B (Spa Gift Card) as a short-lived experience with no tangible keepsake."
      ],
      pronunciationGuide: {
        english: {
          phonetic: "/aɪ wʊd ˈdɛfɪnɪtli chuːz ðə ˈdɪʤɪtl iː-bʊk ˈriːdə æz ðə məʊst ˈmiːnɪŋfʊl ɡɪft/",
          intonation: "Warm, respectful intonation. Express heartfelt appreciation.",
          stressAndLinking: "Stress: 'E-BOOK READER', 'LITERATURE', 'PRACTICAL'. Link: 'pre_loaded', 'token_of'."
        },
        vietnamese: {
          huongDanPhatAm: "Từ 'fountain pen' /ˈfaʊn.tɪn pen/, 'e-book reader' /ˈiː.bʊk ˈriː.dər/. Âm 'gratitude' /ˈɡræt.ɪ.tʃuːd/.",
          nguDieuVaNhanGiong: "Thể hiện sự tôn trọng bằng giọng nói ấm áp và trang trọng.",
          meoTraLoi: "Liên hệ trực tiếp đến đặc thù giáo viên (yêu sách, nghỉ hưu cần thư giãn trí tuệ) để lập luận thuyết phục."
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
    level: "Target Band B2 (6.0 - 8.0)",
    description: "Choosing the best method to master English speaking in 6 months: classroom course, 1-on-1 native tutor, or speaking club.",
    iconName: "Globe",
    question: {
      id: "part2-set-4",
      situationTitle: "Selecting an English Speaking Learning Strategy",
      situation: "You need to drastically improve your English speaking fluency within 6 months to prepare for upcoming international job interviews. You are evaluating three study methods: enrolling in an intensive classroom course at a language academy, hiring a 1-on-1 private online native tutor, or joining a local English speaking club while self-studying with mobile apps.",
      options: [
        {
          id: "opt-a",
          label: "Option A",
          title: "Intensive Classroom Course at an Academy",
          description: "Attending 3 evening classes per week with 15 classmates and a structured textbook syllabus.",
          advantages: [
            "Structured curriculum and peer encouragement",
            "Fixed study schedule preventing laziness"
          ],
          disadvantages: [
            "Limited individual speaking time per student (only 5-10 minutes per class)",
            "Generic pace that might not focus on job interview coaching"
          ]
        },
        {
          id: "opt-b",
          label: "Option B",
          title: "1-on-1 Private Online Native Tutor",
          description: "Customized online video coaching sessions with a native speaker tailored to job interview scenarios.",
          advantages: [
            "100% individual speaking time with instant error correction",
            "Customized curriculum focused on interview questions and professional vocabulary",
            "Flexible scheduling from home"
          ],
          disadvantages: [
            "Higher tuition fee per hour"
          ]
        },
        {
          id: "opt-c",
          label: "Option C",
          title: "Local English Club & Self-Study Apps",
          description: "Attending free weekend community English clubs and practicing daily with AI apps.",
          advantages: [
            "Budget-friendly and fun social environment",
            "Flexible self-paced practice"
          ],
          disadvantages: [
            "Lack of professional correction for grammar and pronunciation errors",
            "Inconsistent commitment without an instructor"
          ]
        }
      ],
      prompt: "Which language learning approach would you choose to achieve your 6-month goal? Give reasons for your choice and explain why the other methods were rejected.",
      keywords: [
        "rapid progress within a tight timeframe (tiến bộ nhanh trong thời gian ngắn)",
        "tailored curriculum (giáo trình thiết kế riêng)",
        "instant constructive feedback (phản hồi sửa lỗi lập tức)",
        "maximize speaking output (tối đa hóa thời lượng nói)",
        "generic one-size-fits-all pace (tốc độ chung cho tất cả)",
        "lack of professional oversight (thiếu sự giám sát chuyên môn)",
        "return on investment (hiệu quả so với chi phí đầu tư)",
        "achieve target band (đạt band điểm/mục tiêu đề ra)"
      ],
      tips: [
        "Highlight the strict deadline (6 months for job interviews).",
        "Choose Option B (1-on-1 Native Tutor) because 100% focused attention and custom interview preparation produce maximum results in short time.",
        "Reject Option A (Academy Class) because speaking time is split among 15 students.",
        "Reject Option C (Club & Apps) because casual chat lacks rigorous interview correction."
      ],
      pronunciationGuide: {
        english: {
          phonetic: "/aɪ wʊd strɒŋli fævər ˈhaɪərɪŋ ə wʌn-ɒn-wʌn ˈpraɪvɪt ˈnaɪtɪv ˈtjuːtər/",
          intonation: "Confident, career-oriented tone. Emphasize keywords like 'TAILORED', 'FAST-TRACK', 'FEEDBACK'.",
          stressAndLinking: "Stress: 'ONE-ON-ONE', 'INTERVIEW', 'EFFICIENCY'. Link: 'one_on_one', 'tailored_to'."
        },
        vietnamese: {
          huongDanPhatAm: "Từ 'tutor' /ˈtjuː.tər/, 'curriculum' /kəˈrɪk.jə.ləm/. Âm 'interview' /ˈɪn.tə.vjuː/.",
          nguDieuVaNhanGiong: "Lập luận với phong thái quyết đoán của người đi làm hướng tới mục tiêu sự nghiệp.",
          meoTraLoi: "Đưa ra mục tiêu 6 tháng làm tiêu chí quyết định cốt lõi: thời gian ngắn cần học tập trung 1-1."
        }
      },
      modelAnswerB1: "If I need to improve my English speaking in 6 months for job interviews, I would choose hiring a 1-on-1 private native tutor online.\n\nFirst, with a 1-on-1 tutor, I can practice speaking during the whole lesson. The tutor can help me practice job interview questions and correct my pronunciation and grammar errors immediately. This helps me improve very quickly in 6 months.\n\nSecond, I don't choose the classroom course at an academy because there are 15 students in the class, so each student only speaks for 5 to 10 minutes. It is too slow for my urgent goal.\n\nAlso, I do not choose the English club because people there just chat casually and nobody corrects my mistakes.\n\nIn conclusion, a 1-on-1 native tutor is the fastest and most effective way for me to pass my job interviews.",
      modelAnswerB2: "Given my urgent goal of mastering English speaking within just 6 months for international job interviews, I would strongly favor Option B: hiring a 1-on-1 private online native tutor. In a tight timeframe, efficiency and customized training are vital. A 1-on-1 tutor provides 100% speaking time during every lesson, tailored directly to job interview scenarios and professional terminology. Furthermore, receiving instant feedback on my pronunciation and grammatical errors will fast-track my progress far quicker than traditional methods.\n\nConversely, I would turn down the intensive classroom course at an academy because in a class of 15 students, individual speaking time is diluted to barely 10 minutes per session, and the generic curriculum moves too slowly for job preparation. Similarly, while joining an English club is fun and cheap, casual conversations with peers lack professional correction, allowing bad speech habits to persist uncorrected.\n\nIn conclusion, investing in a 1-on-1 native tutor is undeniably the most effective strategy to guarantee job interview success in 6 months.",
      modelAnswer: "Given my urgent goal of mastering English speaking within just 6 months for international job interviews, I would strongly favor Option B: hiring a 1-on-1 private online native tutor. In a tight timeframe, efficiency and customized training are vital. A 1-on-1 tutor provides 100% speaking time during every lesson, tailored directly to job interview scenarios and professional terminology. Furthermore, receiving instant feedback on my pronunciation and grammatical errors will fast-track my progress far quicker than traditional methods.\n\nConversely, I would turn down the intensive classroom course at an academy because in a class of 15 students, individual speaking time is diluted to barely 10 minutes per session, and the generic curriculum moves too slowly for job preparation. Similarly, while joining an English club is fun and cheap, casual conversations with peers lack professional correction, allowing bad speech habits to persist uncorrected.\n\nIn conclusion, investing in a 1-on-1 native tutor is undeniably the most effective strategy to guarantee job interview success in 6 months.",
      modelAnswerPhonetics: "/ˈɡɪvən maɪ ˈɜːʤənt ɡəʊl əv ˈmɑːstərɪŋ ˈɪŋɡlɪʃ ˈspiːkɪŋ.../"
    }
  }
];
