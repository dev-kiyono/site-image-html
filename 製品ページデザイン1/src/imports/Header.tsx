import heltecLogo from 'figma:asset/544c68c7b1766a6fbfcc3dfe317c80e035cd7f3a.png';

function Container() {
  return (
    <div className="bg-[#CCFF00] relative rounded-[4px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid size-full" />
    </div>
  );
}

function Paragraph() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="font-['Arimo:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-white text-[14px] text-nowrap">株式会社HELTEC</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="basis-0 font-['Arimo:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-gray-400 text-[12px]">センシング事業部</p>
    </div>
  );
}

function Container1() {
  return (
    <div className="basis-0 grow h-[36px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph />
        <Paragraph1 />
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[40px] relative shrink-0" data-name="Container">
      <img src={heltecLogo} alt="株式会社HELTEC センシング事業部" className="h-full w-auto" />
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-white text-[14px] text-center text-nowrap hover:text-[#CCFF00] transition-colors cursor-pointer">Product</p>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="font-['Arimo:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-gray-400 text-[12px] text-center text-nowrap">製品情報</p>
    </div>
  );
}

function Link() {
  return (
    <div className="h-[36px] relative shrink-0 w-[48.078px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container3 />
        <Container4 />
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-white text-[14px] text-center hover:text-[#CCFF00] transition-colors cursor-pointer">Event</p>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="font-['Arimo:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-gray-400 text-[12px] text-center text-nowrap">出展情報</p>
    </div>
  );
}

function Link1() {
  return (
    <div className="h-[36px] relative shrink-0 w-[48px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container5 />
        <Container6 />
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-white text-[14px] text-center hover:text-[#CCFF00] transition-colors cursor-pointer">News</p>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="font-['Arimo:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-gray-400 text-[12px] text-center text-nowrap">お知らせ</p>
    </div>
  );
}

function Link2() {
  return (
    <div className="h-[36px] relative shrink-0 w-[40.391px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container7 />
        <Container8 />
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-white text-[14px] text-center text-nowrap hover:text-[#CCFF00] transition-colors cursor-pointer">Company</p>
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arimo:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-gray-400 text-[12px] text-center">会社概要</p>
    </div>
  );
}

function Link3() {
  return (
    <div className="basis-0 grow h-[36px] min-h-px min-w-px relative shrink-0" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container9 />
        <Container10 />
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-white text-[14px] text-center text-nowrap hover:text-[#CCFF00] transition-colors cursor-pointer">Support</p>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="font-['Arimo:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-gray-400 text-[12px] text-center text-nowrap">サポート</p>
    </div>
  );
}

function Link4() {
  return (
    <div className="h-[36px] relative shrink-0 w-[49.641px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container11 />
        <Container12 />
      </div>
    </div>
  );
}

function Navigation() {
  return (
    <div className="h-[36px] relative shrink-0 w-[373.094px]" data-name="Navigation">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[32px] items-center relative size-full">
        <Link />
        <Link1 />
        <Link2 />
        <Link3 />
        <Link4 />
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-center text-nowrap text-[#1A1A1A]">Contact</p>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="font-['Arimo:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[12px] text-center text-nowrap text-[#1A1A1A]">お問合せ</p>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#CCFF00] hover:bg-[#b8e600] transition-colors h-[56px] relative shrink-0 w-[95.875px] cursor-pointer" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-0 pt-[10px] px-[24px] relative size-full">
        <Container13 />
        <Container14 />
      </div>
    </div>
  );
}

export default function Header() {
  return (
    <div className="bg-[#002040] relative size-full border-b border-[#CCFF00]/20" data-name="Header">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[158.5px] py-0 relative size-full">
          <Container2 />
          <div className="flex items-center gap-8">
            <Navigation />
            <Button />
          </div>
        </div>
      </div>
    </div>
  );
}