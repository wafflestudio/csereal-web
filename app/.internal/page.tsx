import HTMLViewer from '../../components/editor/HTMLViewer';

export default function InternalPage() {
  return (
    <div className="m-10 min-w-[720px]">
      <HTMLViewer htmlContent={content} />
    </div>
  );
}

const content = `<p><strong style="font-size: large;">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</strong></p>
<p style="text-align: center;"><strong style="font-size: large;"> &nbsp;교수위원회</strong></p>
<table style="width: 754px;" border="0" cellspacing="0" cellpadding="0"><colgroup><col width="142" /> <col width="521" /> <col width="91" /> </colgroup>
<tbody>
<tr>
<td class="xl117" style="text-align: center;" width="142" height="41"><strong>위원회</strong></td>
<td class="xl117" style="text-align: center;" width="521"><strong>위원</strong></td>
<td class="xl117" style="text-align: center;" width="91"><strong>Mailing List</strong></td>
</tr>
<tr>
<td class="xl115" style="text-align: center;" width="142" height="41">인사위원회<br /> (personnel affairs)</td>
<td class="xl116" style="text-align: left;">&nbsp;*이광근, 김건희, 김진수, 서진욱, 유승주,&nbsp;<span><span>하순회</span>,&nbsp;</span>허충길</td>
<td class="xl114" style="text-align: center;">cmt_pa</td>
</tr>
<tr>
<td class="xl115" style="text-align: center;" width="142" height="41">기획위원회<br /> (strategy &amp; planning)</td>
<td class="xl116" style="text-align: left; width: 740px;">&nbsp;*이광근, 김선, 김지홍, 김형주, 문병로, 문봉기, 박근수, 이상구, 장병탁, 전화숙, 하순회</td>
<td class="xl114" style="text-align: center;">cmt_sp</td>
</tr>
<tr>
<td class="xl115" style="text-align: center;" width="142" height="41">학사위원회<br /> (academic affairs)</td>
<td class="xl116" style="text-align: left;">&nbsp;*김건희,&nbsp;<span>김진수, 권태경, 박경수, 서진욱, 송용수, 송현오, 원정담, 허충길</span></td>
<td class="xl114" style="text-align: center;">cmt_aa</td>
</tr>
<tr>
<td class="xl115" style="text-align: center;" width="142" height="41">학생지원위원회<br /> (student affairs)</td>
<td class="xl116" style="text-align: left;">&nbsp;*허충길, <span>김태현, 박재식, 송용수, 원정담, 이창건, 주한별, Bernhard Egger</span><span>&nbsp;</span></td>
<td class="xl114" style="text-align: center;">cmt_sa</td>
</tr>
<tr>
<td class="xl115" style="text-align: center;" width="142" height="41">입시관리위원회<br /> (admission process)</td>
<td class="xl116" style="text-align: left;">&nbsp;*김건희,&nbsp;<span>김태현<span>, 박재식</span>,&nbsp;</span>송용수<span>, 원정담</span>, 유승주, 주한별</td>
<td class="xl114" style="text-align: center;">cmt_ap</td>
</tr>
<tr>
<td class="xl115" style="text-align: center;" width="142" height="41">자원관리위원회<br /> (computing resource)</td>
<td class="xl116" style="text-align: left;">&nbsp;*허충길, 박재식,&nbsp;송현오, <span>이영기,&nbsp;</span>Bernhard Egger</td>
<td class="xl114" style="text-align: center;">cmt_cr</td>
</tr>
<tr>
<td class="xl115" style="text-align: center;" width="142" height="41">공간관리위원회<br /> (space resource)</td>
<td class="xl116" style="text-align: left;">&nbsp;*이광근,&nbsp;<span>권태경, 박경수, 박재식, 원정담, 유승주, 주한별</span></td>
<td class="xl114" style="text-align: center;">cmt_sr</td>
</tr>
<tr>
<td class="xl115" style="text-align: center;" width="142" height="41">교원탐색위원회<br /> (faculty search)</td>
<td class="xl116" style="text-align: left;">&nbsp;*이광근, 김건희, <span>김진수, 박경수,&nbsp;</span>서진욱<span>, 이영기</span>, 이재욱<span>, 전병곤</span>, 허충길, 황승원</td>
<td class="xl114" style="text-align: center;">cmt_fs</td>
</tr>
<tr>
<td class="xl115" style="text-align: center;" width="142" height="41">건축기금위원회<br /> (fund raise)</td>
<td class="xl116" style="text-align: left;">&nbsp;*이광근, <span>권태경,&nbsp;</span>김지홍, 김진수, 김태현, 서진욱, 엄현상, 이재욱, 장병탁<span>, 전병곤</span>, 허충길</td>
<td class="xl114" style="text-align: center;">cmt_fr</td>
</tr>
<tr>
<td class="xl115" style="text-align: center;" width="142" height="41">자동화위원회<br /> (digital automation)</td>
<td class="xl116" style="text-align: left;">&nbsp;*이광근, 김태현, 송현오<span>, 원정담</span>, 이재욱, 주한별, 황승원</td>
<td class="xl114" style="text-align: center;">cmt_da</td>
</tr>
<tr>
<td class="xl115" style="text-align: center;" width="142" height="41">
<p>BK위원회</p>
</td>
<td class="xl116" style="text-align: left;">&nbsp;*서진욱, 이영기, <span>김건희,&nbsp;</span>김진수, 엄현상, 원정담, 허충길</td>
<td class="xl114" style="text-align: center;"><span>cmt_bk</span></td>
</tr>
<tr>
<td class="xl115" style="text-align: center;" width="142" height="41">10-10위원회</td>
<td class="xl116" style="text-align: left;">&nbsp;*이광근,&nbsp;<span>권태경, 김태현, <span><span>송용수</span>,&nbsp;</span>이영기, 주한별</span></td>
<td class="xl114" style="text-align: center;"><span>tenten</span></td>
</tr>
</tbody>
</table>
<p>&nbsp;</p>
<p style="text-align: center;"><strong><span style="font-size: large;">학부 메일링리스트</span></strong></p>
<table border="0" cellspacing="0" cellpadding="0"><colgroup><col width="142" /><col width="521" /><col width="91" /></colgroup>
<tbody>
<tr>
<td class="xl117" width="142" height="41"><strong>구분</strong></td>
<td class="xl117" width="91"><strong>Mailing List</strong></td>
</tr>
<tr>
<td class="xl115" width="142" height="41">학부장</td>
<td class="xl114">head</td>
</tr>
<tr>
<td class="xl115" width="142" height="41">학부장단</td>
<td class="xl114">head_team</td>
</tr>
<tr>
<td class="xl115" width="142" height="41">행정실 직원</td>
<td class="xl114">staff</td>
</tr>
<tr>
<td class="xl115" width="142" height="41">교수님 전체</td>
<td class="xl114">prof</td>
</tr>
<tr>
<td class="xl115" width="142" height="41">교수님 비서</td>
<td class="xl114">pa</td>
</tr>
</tbody>
</table>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p><strong style="font-size: large;">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;학생 메일링리스트</strong></p>
<table style="width: 754px;" border="0" cellspacing="0" cellpadding="0"><colgroup><col width="87" /> <col span="3" width="141" /> <col width="216" /> </colgroup>
<tbody>
<tr style="height: 2px;">
<td class="xl72" style="text-align: center;" colspan="4" width="510" height="33"><strong>학생 구분</strong></td>
<td class="xl75" style="text-align: center;" width="216"><strong>Mailing List</strong></td>
</tr>
<tr style="height: 2px;">
<td class="xl69" colspan="4" height="33">학생 전체</td>
<td class="xl76">students</td>
</tr>
<tr style="height: 2px;">
<td class="xl66" rowspan="10" height="231">　</td>
<td class="xl69" colspan="3">
<p>학부생</p>
</td>
<td class="xl76">&nbsp; &nbsp; under_students</td>
</tr>
<tr style="height: 6px;">
<td class="xl69" style="height: 24px;" rowspan="5">　</td>
<td class="xl69" style="height: 24px;" colspan="2">주전공생</td>
<td class="xl69" style="height: 24px;">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;major_students</td>
</tr>
<tr style="height: 2px;">
<td style="height: 2px;" rowspan="3">　</td>
<td style="height: 2px;">본과생</td>
<td style="height: 2px;">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;cse_students</td>
</tr>
<tr style="height: 2px;">
<td style="height: 3px;">자유전공학부생</td>
<td style="height: 3px;">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;cls_students</td>
</tr>
<tr style="height: 2px;">
<td style="height: 3px;">복수전공생</td>
<td style="height: 3px;">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;other_students</td>
</tr>
<tr style="height: 2px;">
<td class="xl76" style="height: 24px;" colspan="2">부전공생</td>
<td class="xl76" style="height: 24px;">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;minor_students</td>
</tr>
<tr style="height: 2px;">
<td class="xl69" colspan="3" height="33">대학원생</td>
<td class="xl78"><span class="font7">&nbsp; &nbsp; </span><span class="font6">grad_students</span></td>
</tr>
<tr style="height: 2px;">
<td class="xl69" colspan="3" height="33"><span>외국인 학생</span></td>
<td class="xl78" style="margin-left: 90px;"><span class="font7"><span><span><span>&nbsp; &nbsp;&nbsp;</span><span>international_students</span></span></span></span></td>
</tr>
<tr style="height: 2px;">
<td class="xl78" style="margin-left: 90px; height: 24px;" rowspan="2">&nbsp;</td>
<td class="xl78" style="margin-left: 90px; height: 24px;" colspan="2"><span>외국인 학부생</span></td>
<td class="xl78" style="margin-left: 90px; height: 24px;"><span class="font7"><span><span><span><span><span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</span>international_under_students</span></span></span></span></span></td>
</tr>
<tr style="height: 2px;">
<td class="xl78" style="margin-left: 90px; height: 24px;" colspan="2"><span>외국인 대학원생</span></td>
<td class="xl78" style="margin-left: 90px; height: 24px;"><span><span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</span>international_grad_students</span></td>
</tr>
<tr style="height: 2px;">
<td class="xl69" colspan="4" height="33">랩장</td>
<td class="xl77">chiefs</td>
</tr>
</tbody>
</table>
<p><br /><br /></p>`;
