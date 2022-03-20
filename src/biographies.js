import React from "react";

function activateReadMore(event) {
  event.target.parentNode.childNodes[3].classList.remove("d-none");
  event.target.remove();
}

const datas = [
  {
    avatar:
      "https://user-images.githubusercontent.com/81323808/146684976-23c4d65f-1e4f-44e3-8b5b-49438ee991ee.jpg",
    bio: {
      turkish: (
        <span>
          Herkese merhaba, Ben Erdem ASIBOSTAN. İzmir doğumluyum ve tüm
          eğitimimi İzmir'de tamamladım. 2000 yılından bu yana da öğrencilerimle
          öğrenme serüvenim devam ediyor. Edebiyatın büyülü dünyasını hissetmek
          ve öğrencilerime de hissettirmek için elimizden gelen her türlü yardım
          ve çalışmayı sürdürüyorum. Edebiyatın kalem oynattığı her alana ilgim
          var.{" "}
          <span className="bio--section-link" onClick={activateReadMore}>
            Dahasını oku...
          </span>
          <span className="d-none">
            Ayrıca su ve deniz hayatımın vazgeçilmez unsurları. Denizin olmadığı
            yerde kendimi sudan çıkmış balık gibi hissederim. Öyle ki sudan
            ayrılmamak için akvaryum hobisiyle de ilgileniyorum. Bunlara bir de
            teknolojiyi eklemek gerekiyor artık. Ses, resim ve video işleme
            konularına ilgi duyuyorum. Bu konuda çeşitli çalışmalarım da mevcut.
            Ayrıca Python programlama dilini öğrenmek için çalışmalarımı devam
            ettiriyorum. Öğrenme yönetim sistemleri ve içerik yönetim sistemleri
            de ayrıca öğrenmek için çaba harcadığım diğer alanlar. Öğrenme
            hayatımız boyunca devam edecek ve bu öğrendiklerimi öğrencilerimizle
            paylaşmaya da devam edeceğim. Tüm öğrenme arkadaşlarıma selamlar.
          </span>
        </span>
      ),
      english: (
        <span>
          Hello everyone, I'm Erdem ASIBOSTAN. I was born in Izmir and I
          completed all my education in Izmir. Since 2000, my adventure of
          learning with my students continues. I continue to help and work in
          every possible way to feel the magical world of literature and to make
          my students feel it as well. I have an interest in every field of
          literature.{" "}
          <span className="bio--section-link" onClick={activateReadMore}>
            Read more...
          </span>
          <span className="d-none">
            In addition, water and sea are indispensable elements of my life.
            Where there is no sea, I feel like a fish out of water. So much so
            that I am also interested in the aquarium hobby so as not to leave
            the water. Now we need to add technology to these. I am interested
            in audio, image and video processing. I have various works on this
            subject. I also continue my studies to learn the Python programming
            language. Learning management systems and content management systems
            are also other areas that I strive to learn. Learning will continue
            throughout our lives and I will continue to share what I have
            learned with our students. Greetings to all my learning friends.
          </span>
        </span>
      ),
    },
  },
  {
    avatar:
      "https://user-images.githubusercontent.com/81323808/146785190-d300d023-6262-48ee-b462-89d8a6a20325.jpg",
    bio: {
      turkish: (
        <span>
          Merhaba ben Can Cicioğlu. İzmir doğumlu olan bendeniz tam bir Ege ve
          deniz aşığıyım. Eğitim ile birlikte öğrenme yolculuğum 1998'den beri
          devam ediyor. Eğitimin alternatifi makbuldür diyerek çocuklarla ve
          gençlerle birlikte öğrenme deneyimi yaşadığımız bir çok projede yer
          aldım. Bu yolculuk sırasında hep{" "}
          <a
            className="bio--section-link"
            href="https://twitter.com/hashtag/hayalkurveitirazet?src=hashtag_click"
            target="_blank"
            rel="noreferrer"
          >
            #hayalkurveitirazet
          </a>{" "}
          sloganım oldu . Birlikte hayal kurmaya devam ediyoruz.
        </span>
      ),
      english: (
        <span>
          Hello, I am Can Cicioğlu, was born in İzmir, and I am a true Aegean
          and sea lover. My journey of learning along with education has been
          going on since 1998. I took part in many projects where we had
          learning experiences with children and young people, saying that the
          alternative to education is acceptable. During this journey, my slogan
          has always been{" "}
          <a
            className="bio--section-link"
            href="https://twitter.com/hashtag/hayalkurveitirazet?src=hashtag_click"
            target="_blank"
            rel="noreferrer"
          >
            #hayalkurveitirazet
          </a>
          . We continue to dream together.
        </span>
      ),
    },
  },
  {
    avatar: "https://avatars.githubusercontent.com/u/81323808?v=4",
    bio: {
      turkish: (
        <span>
          Ben Taylan.{" "}
          <a
            className="bio--section-link"
            href="https://github.com/Unreol-Freedom/unreol-freedom.github.io"
            target="_blank"
            rel="noreferrer"
          >
            Unreol Freedom
          </a>
          'da çalışan, full-stack web geliştiricisi ve ayrıca Python
          programcısıyım. Tam anlamıyla bir özgür yazılım destekçisi ve
          üreticisi, programcısıyım. Bana Python, ReactJS, NextJS, ExpressJS ve
          Linux hakkında sorabilirsiniz. Öte yandan video oyunları, dövüş
          sanatları, İngilizce ve satranç ile oldukça yakından ilgileniyorum.
          <a
            className="bio--section-link"
            href="https://lichess.org/@/Hades_1"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            Lichess profilim
          </a>
          'i görebilirsiniz.
        </span>
      ),
      english: (
        <span>
          I'm Taylan. I'm a full-stack web developer and also a Python
          programmer who is currently working on{" "}
          <a
            className="bio--section-link"
            href="https://github.com/Unreol-Freedom/"
            target="_blank"
            rel="noreferrer"
          >
            Unreol Freedom
          </a>
          . I'm totally a free software supporter and producer, programmer. You
          can ask me about Python, ReactJS, NextJS, ExpressJS and Linux. I’m on
          the other hand really into video games, martial arts, English and
          chess. See my{" "}
          <a
            className="bio--section-link"
            href="https://lichess.org/@/Hades_1"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            Lichess profile
          </a>
          .
        </span>
      ),
    },
  },
  {
    avatar:
      "https://user-images.githubusercontent.com/81323808/146669348-15e28976-1992-4fb7-8958-9bd71357478e.jpg",
    bio: {
      turkish: (
        <span>
          Ben Seçkin. İzmirliyim. İlkokulu ve ortaokulu Egekent 2'de okudum.
          Şuanda Tuğba Özbek Anadolu Lisesi' nin 9/A sınıfında okuyorum.
          Okulumuzun okuldışı faaliyeti olan Podcast'e katılıyorum. Burada
          kendimizi ve çevremizi tanımaya çalışıyoruz ve fikir alışverişinde
          bulunuyoruz.
        </span>
      ),
      english: (
        <span>
          I'm Seçkin and I'm from İzmir. I went to primary and secondary school
          in Egekent 2. I'm currently studying at Tuğba Özbek Anatolian High
          School in class 9/A. I participate in the extracurricular activity
          podcast of our School. Here we try to know ourselves and our
          environment and exchange ideas.
        </span>
      ),
    },
  },
  {
    avatar:
      "https://user-images.githubusercontent.com/81323808/146671283-92915024-cc29-4064-8752-d1cc8d5b7e37.png",
    bio: {
      turkish: (
        <span>
          Ben Çiğdem Buse Taş. Tuğba Özbek Anadolu Lisesinde okuyan bir
          öğrenciyim. 10. sınıfım. Kitap okumayı ve gitar çalmayı severim. Okul
          dışı aktivitesi olarak Podcast'e katılıyorum.
        </span>
      ),
      english: (
        <span>
          I'm Çiğdem Buse Taş and I'm a student who currently studies at Tuğba
          Özbek Anatolian High School. I'm in tenth grade. I'm interested in
          reading books and playing the guitar. I participate in the TÖAL
          Podcast as an extracurricular activity in my school.
        </span>
      ),
    },
  },
  {
    avatar:
      "https://user-images.githubusercontent.com/81323808/146672010-fc417164-6611-4ca5-ac82-db638cf0d983.jpg",
    bio: {
      turkish: (
        <span>
          Merhabalar ben Tuğba Özbek Anadolu Lisesi 9. sınıf öğrencisi Ayşe Gül.
          Okulumuzda radyo, podcast vb. ders dışı etkinliklerde yer alıyorum.
          Podcast uygulamalarında alternatif eğitimi hedeflerken, mevcut radyo
          etkinliklerimizde okul öğrencilerimizin fikirlerini alarak öğle
          aralarını daha keyifli hale getirmeye çalışıyoruz.
        </span>
      ),
      english: (
        <span>
          Hi, I am Ayşe Gül, a 9th grade student at Tuğba Özbek Anatolian High
          School. Radio, podcast etc. in our school I am involved in
          extracurricular activities. While aiming for alternative education in
          podcast applications, we are trying to make lunch breaks more
          enjoyable by taking the ideas of our school students in our current
          radio activities.
        </span>
      ),
    },
  },
  {
    avatar:
      "https://user-images.githubusercontent.com/81323808/146973251-0321afe6-b1fd-4395-a12e-45cccc267b3c.jpg",
    bio: {
      turkish: (
        <span>
          Ben Aslı. Tuğba Özbek Anadolu Lisesi'nde 9.sınıf öğrencisiyim.
          Renklerin kodlarını öğrenmeyi çok severim. Sinema ve müzik endüstrisi
          ilgimi çekiyor. Uyumaya çok düşkünüm. Okulumuzun okuldışı faaliyeti
          olan Podcast'e katılıyorum. Burada yeni şeyler öğrenip projeler
          üretiyoruz.
        </span>
      ),
      english: (
        <span>
          I'm Aslı. I'm a 9th grade student in Tuğba Özbek Anatolian High
          School. I'm fond of learning the codes of colors. The cinema and music
          industry attract attention on me. I'm pretty into sleeping. I join the
          extracurricular activity of our school, Podcast. We learn something
          new and create projects.
        </span>
      ),
    },
  },
  {
    avatar:
      "https://user-images.githubusercontent.com/81323808/146681056-d6611095-a53b-43da-8461-785a71458570.png",
    bio: {
      turkish: (
        <span>
          Ben Arda Ceylan. Tuğba Özbek Anadolu Okulu'nda öğrenciyim. 9.
          sınıftayım. Filmlere bağımlıyım. Film izlediğim zamanlar dışında
          zamanımı kitaplarla, video oyunlarıyla, D&D ve çizgi romanlarla
          geçiriyorum. Aynı zamanda Vertical, TÖAL Podcast üyesiyim.{" "}
        </span>
      ),
      english: (
        <span>
          I'm Arda Ceylan. I'm a student at Tuğba Özbek Anatolian School. I'm in
          9th grade. I'm addicted to movies. I spend my time with books,video
          games, D&D and comic books except the time I watch movies. I'm also a
          member of Vertical, TÖAL Podcast.
        </span>
      ),
    },
  },
  {
    avatar:
      "https://user-images.githubusercontent.com/81323808/146681220-4a069239-dd9c-4bf2-a8da-2262c843c9c5.png",
    bio: {
      turkish: (
        <span>
          Ben M.Osman Gültepe. Sivaslıyım. Tuğba Özbek Anadolu Lisesinde, 9/B
          sınıfında okuyorum. TÖAL Podcast grubundayım. Futbol oynamayı ve
          online oyunlar oynamayı severim. Okulumda ders dışı bir etkinlik
          olarak TÖAL Podcast'e katılıyorum.{" "}
        </span>
      ),
      english: (
        <span>
          I'm M.Osman Gültepe. I am from Sivas. I study at Tuğba Özbek Anatolian
          High School in the class 9/B. I'm in the TÖAL Podcast group. I like
          playing activateReadMoretball and playing online games. I participate
          in the TÖAL Podcast as an extracurricular activity in my school.
        </span>
      ),
    },
  },
  {
    avatar:
      "https://user-images.githubusercontent.com/81323808/146688310-9408ec6d-07d1-417a-b8ff-88dae68a86b4.png",
    bio: {
      turkish: (
        <span>
          Adım Tuğsem Özçiçekçi. 13 yaşındayım. Tuğba Özbek Anadolu Lisesi'nde
          9. sınıf okuyorum. Podcast grubumuzun kameramanıyım. Klip çekiyorum,
          editliyorum ve editlenmiş videoları sosyal medya platformlarında
          paylaşıyorum. Hobilerim şarkı söylemek ve müzik dinlemek.{" "}
        </span>
      ),
      english: (
        <span>
          My name is Tuğsem Özçiçekçi. I'm 13 years old. I study 9th grade at
          Tuğba Özbek Anatolian High School. I'm the cameraman of our podcast
          group. I take clips, edit them and share edited videos on social media
          platforms. My hobbies are singing and listening to music.
        </span>
      ),
    },
  },
  {
    avatar:
      "https://user-images.githubusercontent.com/81323808/146972310-4c129751-030a-4efb-9fde-9a2ca42fd92f.png",
    bio: {
      turkish: (
        <span>
          Merhaba, ben Zeynep Bakıcı. İzmir'de Tuğba Özbek Anadolu Lisesi'nde
          okuyorum. Okulumuzda hepimizin düşüncelerinin beyan edildiği podcast
          ve radyo grubunun bir üyesiyim bu grupta ses işleme ve radyo kısmında
          faaliyet gösteriyorum. Bu grupta olmaktan mutluluk duyuyorum
        </span>
      ),
      english: (
        <span>
          Hello, I am Zeynep Bakıcı. I study at Tuğba Özbek Anatolian High
          School in İzmir. I am a member of the podcast and radio group in our
          school, where we all express our thoughts, and I work in the sound
          processing and radio section of this group. I am happy to be in this
          group
        </span>
      ),
    },
  },

  {
    avatar:
      "https://user-images.githubusercontent.com/81323808/146785687-99f3e6d0-74be-4ad2-84dc-7217903bb124.png",
    bio: {
      turkish: (
        <span>
          Adım Ömer Ali Kılıç, Tuğba Özbek Anadolu Lisesi öğrencisiyim.
          Bulunduğum podcast grubunun ses işleme bölümünde çalışıyorum.
        </span>
      ),
      english: (
        <span>
          My name is Ömer Ali Kılıç, I am a student at Tuğba Özbek Anatolian
          High School. I work in the audio processing department of the podcast
          group I am in.
        </span>
      ),
    },
  },
  {
    avatar:
      "https://user-images.githubusercontent.com/81323808/146785778-ec826ed2-6e01-4935-80e7-bfd37ea169aa.png",
    bio: {
      turkish: (
        <span>
          Ben Yağmur Sefil. 10. sınıf öğrencisiyim. Edebiyat başta olmak üzere
          felsefe, psikoloji ve popüler bilimle ilgileniyorum. Okulumuzun
          Podcast etkinliklerinde şiir, pasaj seslendirmeleri yapıyorum, bunun
          dışında kendi fikirlerim ve film incelemelerimi de bu şekilde
          paylaşıyorum.
        </span>
      ),
      english: (
        <span>
          I'm Yağmur Sefil. I am a 10th grade student. I am interested in
          philosophy, psychology and popular science, especially literature. I
          do poetry and passage voiceovers at our school's Podcast events, and I
          also share my own ideas and movie reviews in this way.{" "}
        </span>
      ),
    },
  },
  {
    avatar:
      "https://user-images.githubusercontent.com/81323808/146962882-dc117ea4-d36d-4862-ae57-d69c4dcf0741.png",
    bio: {
      turkish: (
        <span>
          Ben Asya, İzmir’de yaşıyorum. Tuğba Özbek Anadolu lisesi, 11. sınıf
          öğrencisiyim. Okul dışı yaptığımız bu projeye kayıt yaparak yardım
          ediyorum. Daha çok fikirler sunmaya ve öğretmeye dayalı bu proje
          alternatif bir eğitim sunuyor bizlere. Ben daha çok fikir sunmaya veya
          felsefe dayalı konular hakkında kayıtlar yapıyorum. Eğer projemize
          fırsat tanınırsa çok iyi yerlere gelebileceğimizi düşünüyorum.
        </span>
      ),
      english: (
        <span>
          I'm Asya. I live in İzmir. I'm an 11th grade Tuğba Özbek Anatolian
          High School student. I help this extracurricular project by recording.
          We get to learn and create ideas through this alternative-education
          based project. I do podcasts based on philosophy and creating new
          ideas. I think, in case this project got a good opportinity it'll
          reach the high points.
        </span>
      ),
    },
  },
  {
    avatar:
      "https://user-images.githubusercontent.com/81323808/146963827-c897c338-11fe-42a3-b79e-7718ea65e264.jpg",
    bio: {
      turkish: (
        <span>
          Merhaba. Benim adım Yaren. 17 yaşındayım ve 11. sınıf öğrencisiyim.
          Genelde enerjik ve neşeliyimdir. Tuğba Özbek Anadolu Lisesi Vertical
          takımındayım. Kitap okumayı, fotoğraf çekmeyi ve film izlemeyi
          severim. Sahne Tozu Tiyatrosu'nda iki yıl tiyatro dersi aldım ve bir
          tiyatro oyununda oynadım.
        </span>
      ),
      english: (
        <span>
          Hello. My name is Yaren. I am 17 years old and an 11th grade student.
          I am generally energetic and cheerful. I am in the Vertical team of
          Tuğba Özbek Anatolian High School. I like reading books, taking
          pictures and watching movies. I took theater lessons for two years at
          Sahne Tozu Theater and acted in a theater show.
        </span>
      ),
    },
  },
  {
    avatar:
      "https://user-images.githubusercontent.com/81323808/146965724-708b1728-3fc6-4ac9-a129-793aef917c21.png",
    bio: {
      turkish: (
        <span>
          Merhaba ben Kağan. Dört sene önce öğretmenlerim ve arkadaşlarım
          aracılığıyla katıldığım bu grupta mükemmel işler yaptık. Biz bir sanat
          oluşturduk evet ses düzenlemek de resim yapmak gibi bir sanat...
          Hayatımı ders çalışarak ve eğlenerek geçirdim. Ama aslında biz
          üreticiyiz ve bu bizle de bizden sonra da devam etmeli biz ve ben
          bunun için çalışıyoruz.
        </span>
      ),
      english: (
        <span>
          Hello, I'm Kağan. In this group that I joined four years ago through
          my teachers and friends, we did great jobs. We created an art, yes,
          such as audio processing and painting... I spent my life studying and
          having fun. But in fact, we're producers and this should go on with us
          and after us as well. We and I work for this.
        </span>
      ),
    },
  },
  {
    avatar:
      "https://user-images.githubusercontent.com/81323808/147108056-9570194d-0738-4753-b46c-c320b2247332.jpg",
    bio: {
      turkish: (
        <span>
          Ben Berke. Okulumuzun podcast grubunun en uzun süreye sahip
          katılımcısıyım. Ses düzenleme ekibindeki diğer arkadaşımla beraber
          alınan ses kayıtlarını düzenleyip sunulabilecek hale getiriyoruz.
        </span>
      ),
      english: (
        <span>
          I'm Berke. I'm the participant who has been here longest in our
          school's podcast group. We make the audio recordings servable by
          editing with my other friend in the audio processing group.
        </span>
      ),
    },
  },
  {
    avatar:
      "https://user-images.githubusercontent.com/81323808/146972491-d32d975d-eee7-4362-bb69-e27ce7819ddc.jpg",
    bio: {
      turkish: (
        <span>
          Herkese merhaba ben Esmanur Gültekin Tuğba Özbek Anadolu Lisesinde 10.
          Sınıf öğrenciyim Yapmaktan zevk aldığım birçok çeşit aktivite var
          bunlardan birkaç tanesi müzik dinlemek, yoga veya yürüyüş yapmak ve
          kitap okumaktan fazlasıyla hoşlanırım onun dışında okul dışı faaliyet
          olarak podcast grubunun katılımcıları arasında metin yazarıyım ve bu
          konuda da kendimi birçok anlamda geliştirmek istiyorum Şuan kurgusunu
          kendim yazdığım bir roman yazıyorum ve podcast grubununda bu alanda
          fayda sağlayacağını düşünüyorum:)
        </span>
      ),
      english: (
        <span>
          Hello everyone, I'm Esmanur Gültekin. I'm a 10th grade student in
          Tuğba Özbek Anatolian High School. I've many kinds of activities I
          like. Some of them are listening to music, yoga, taking a walk and
          reading books. I'm really into reading books. On the other hand, as an
          extracurricular activity, I'm a text writer around the participants of
          the podcast group and I want to improve myself about this in many
          ways, too. Now, I'm preparing a novel that I created on my own and I
          think the podcast group will also benefit about this:)
        </span>
      ),
    },
  },
  {
    avatar:
      "https://user-images.githubusercontent.com/81323808/146973405-2b74cb22-0dda-41bb-9a17-24ca0d679a0c.jpeg",
    bio: {
      turkish: (
        <span>
          Ben Zeynep Yaşlıca. 15 yaşındayım ve Tuğba Özbek Anadolu Lisesinde 10.
          Sınıf öğrencisiyim. Müzik dinleneyi , kitap okumayı ve uyumayı
          seviyorum . Onun dışında okul dışı faaliyet olan podcaste katılıyorum.
        </span>
      ),
      english: (
        <span>
          I'm Zeynep Yaşlıca. I'm 15 and I'm a 10th grade student at Tuğba Özbek
          Anatolian High School. I like listening to music, reading books and
          sleeping. Except for that one, I join the podcast extracurricular
          activity.
        </span>
      ),
    },
  },
  {
    avatar:
      "https://user-images.githubusercontent.com/81323808/146974579-783a0487-548a-468b-8349-72c48c47c1d0.jpg",
    bio: {
      turkish: (
        <span>
          Ben Helin. İzmir'de yaşıyorum.Tuğba Özbek Anadolu lisesinde okuyorum.
          11. sınıfım. Okul dışı bir etkinlik olan podcaste katkıda bulunuyorum.
          Yaratıcı fikirlerle ilerlettiğimiz grubumuzun hem eğlendirici hem
          öğretici olduğunu düşünüyorum.
        </span>
      ),
      english: (
        <span>
          I'm Helin. I live in İzmir. I study at Tuğba Özbek Anatolian High
          School. I'm 11th grade. I contribute to the podcast extracurricular
          activity. I think our group that we developed with creative ideas is
          funny and educative.
        </span>
      ),
    },
  },
  {
    avatar:
      "https://user-images.githubusercontent.com/81323808/146975023-3621251e-2c53-4dff-b2ac-f7c3b77be68a.jpg",
    bio: {
      turkish: (
        <span>
          Ben Yusuf Kutsi Kirmizi. Tuğba Özbek Anadolu Lisesi 9. Sınıf
          öğrencisiyim Vertical TÖAL podcast ve radyo grubunda yer aliyorum. Boş
          zamanlarimda Film ve dizi izlemeyi severim. Oyun oynayan biri
          değilimdir. Koleksiyon yapmayi severim. Son zamanlarda arkadaşlarımla
          küçük bir D&D grubu kurduk.
        </span>
      ),
      english: (
        <span>
          I'm Yusuf Kutsi Kırmızı. I'm a 9th grade student of Tuğba Özbek
          Anatolian High School, I participate in the group Vertical TÖAL
          Podcast and Radio. I love watching movies & series in my free time.
          Nowadays, we created a little D&D group with my friends.
        </span>
      ),
    },
  },
  {
    avatar:
      "https://user-images.githubusercontent.com/81323808/147111377-3383b564-f82e-4851-b604-ba1257ba12ca.jpeg",
    bio: {
      turkish: (
        <span>
          Ben Ceren Kocakahya. 10 Ocak 2005’te İzmir’de doğdum. Ancak Bursa’da
          büyüdüm ve ilköğretimimi orada tamamladım. 6. Sınıfta müzik
          öğretmenimin yönlendirmesiyle keman çalmaya başladım. Bunun yanında
          akademik olarak da gayet başarılıydım ve sınıfımda 2. olarak mezun
          oldum. İlköğretimden sonra ortaöğretim için İzmir’e geldim.{" "}
          <span className="bio--section-link" onClick={activateReadMore}>
            Dahasını oku...
          </span>
          <span className="d-none">
            Dışa dönük ve kendini ortaya atan biri olduğum için daha ilk yılımda
            ilk etkinlikte sahne aldım. Tam gaz etkinliklere devam ederken bir
            yandan tekrar keman kursuna başladım. Ancak pandemi sebebiyle
            kursumdan da okulumdan da uzak kaldım. Bu süreçte kendim
            çalışmalarıma devam ettim. Şan dersi almaya başladım, evdeki
            gitarımla çalışmalar yaptım. Okullar açılınca tekrar etkinliklere
            katıldım. Piyano kursuna başladım. Şimdi de diğer ilgi alanlarımla
            ilgili etkinliklere katılıyorum.
          </span>
        </span>
      ),
      english: (
        <span>
          I'm Ceren Kocakahya. I was born in İzmir on the tenth of January,
          2005. However I lived in Bursa and I completed my primary education
          there. I started playing violin through my music teacher in 6th grade.
          Moreover, I was pretty successful as academic and I graduated as the
          second one from my class. I came to İzmir for secondary education
          after primary education.{" "}
          <span className="bio--section-link" onClick={activateReadMore}>
            Read more...
          </span>
          <span className="d-none">
            Because I am an extrovert and assertive person, I took the stage at
            the first event in my first year. While continuing the activities at
            full throttle, I started the violin course again. However, I was
            away from my course and school due to the pandemic. I continued my
            works on my own during this process. I started taking singing
            lessons, and I practiced with my guitar at home. I got back to the
            events after the opening back of schools. I started taking piano
            courses. Now I participate in activities related to my other
            interests.
          </span>
        </span>
      ),
    },
  },
  {
    avatar:
      "https://user-images.githubusercontent.com/81323808/147111276-c07a25d0-10da-4b8e-94aa-1c899951bb8d.jpeg",
    bio: {
      turkish: (
        <span>
          Herkese merhaba. Ben Naz Akan. Tuğba Özbek Anadolu Lisesinde okuyorum.
          Şarkı söylemek benim için nefes almak gibi bir şey. Çok seviyorum.
          Yeni şeyler keşfetmeyi seviyorum. Ayrıca okulumuzda bulunan Podcast
          etkinliğine katılıyorum. Burada hem fikir alışverişi yapıyoruz hem de
          takım ruhuyla çalışmayı öğreniyoruz.
        </span>
      ),
      english: (
        <span>
          Hello everyone. I'm Naz Akan. I study at Tuğba Özbek Anatolian High
          School. Singing a song is kind of like breathing for me. I love it
          very much. I love discovering something new. Also, I participate in
          the activity podcast in our school. Here we both exchange ideas and
          learn to work with a team spirit.
        </span>
      ),
    },
  },
];

export default datas;
