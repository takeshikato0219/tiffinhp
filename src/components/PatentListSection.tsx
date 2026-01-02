"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface Patent {
  id: number;
  patentNumber: string;
  applicationNumber: string;
  applicationDate: string;
  registrationDate: string;
  title: string;
  inventor: string;
  status: string;
  statusDetail: string;
  ipcCodes: string[];
}

const patents: Patent[] = [
  {
    id: 1,
    patentNumber: "特許7781403",
    applicationNumber: "特願2025-140680",
    applicationDate: "2025/08/26",
    registrationDate: "2025/12/10",
    title: "画像認識による商品レイアウト自由配置システム",
    inventor: "加藤　健資",
    status: "特許 有効",
    statusDetail: "登録公報の発行",
    ipcCodes: ["G06T7/194", "G06T7/00,350@B", "G06T7/11"],
  },
  {
    id: 2,
    patentNumber: "特許7781402",
    applicationNumber: "特願2025-113823",
    applicationDate: "2025/07/04",
    registrationDate: "2025/12/08",
    title: "動的経路変更型迷路アトラクションシステムおよびテーマパークＲＰＧ化システム",
    inventor: "加藤　健資",
    status: "特許 有効",
    statusDetail: "登録公報の発行",
    ipcCodes: ["A63J11/00", "A63G31/00"],
  },
  {
    id: 3,
    patentNumber: "特許7781401",
    applicationNumber: "特願2025-102468",
    applicationDate: "2025/06/18",
    registrationDate: "2025/12/08",
    title: "動的経路変更型迷路アトラクションシステムおよびテーマパークＲＰＧ化システム",
    inventor: "加藤　健資",
    status: "特許 有効",
    statusDetail: "登録公報の発行",
    ipcCodes: ["G06Q50/10", "A63J11/00", "A63G31/00"],
  },
  {
    id: 4,
    patentNumber: "特許7766289",
    applicationNumber: "特願2025-139319",
    applicationDate: "2025/08/23",
    registrationDate: "2025/12/02",
    title: "ディンプル羽",
    inventor: "加藤　健資",
    status: "特許 有効",
    statusDetail: "登録公報の発行",
    ipcCodes: ["F42B6/06"],
  },
  {
    id: 5,
    patentNumber: "特開2025-175302",
    applicationNumber: "特願2024-135256",
    applicationDate: "2024/08/14",
    registrationDate: "2025/12/02",
    title: "自動通信方法、自動通信システム、プログラム",
    inventor: "井澤　佑斗",
    status: "審査中",
    statusDetail: "特許査定",
    ipcCodes: ["G06Q30/06", "G06Q50/10", "G06Q30/0601,310"],
  },
  {
    id: 6,
    patentNumber: "特開2025-172262",
    applicationNumber: "特願2025-120119",
    applicationDate: "2025/07/17",
    registrationDate: "2025/11/21",
    title: "キャンピングカーに備えられる椅子およびキャンピングカーに椅子を配置する方法",
    inventor: "井澤　佑斗",
    status: "審査請求前",
    statusDetail: "公開公報の発行",
    ipcCodes: ["B60N2/005", "A47C1/023", "B60N2/20"],
  },
  {
    id: 7,
    patentNumber: "特開2025-172261",
    applicationNumber: "特願2025-093487",
    applicationDate: "2025/06/04",
    registrationDate: "2025/11/21",
    title: "キャンピングカーに備えられる椅子およびキャンピングカーに椅子を配置する方法",
    inventor: "井澤　佑斗",
    status: "審査請求前",
    statusDetail: "公開公報の発行",
    ipcCodes: ["B60N2/34", "B60N2/20", "B60P3/39"],
  },
  {
    id: 8,
    patentNumber: "特開2025-172250",
    applicationNumber: "特願2024-112998",
    applicationDate: "2024/07/13",
    registrationDate: "2025/11/21",
    title: "キャンピングカーに備えられる椅子およびキャンピングカーに椅子を配置する方法",
    inventor: "井澤　佑斗",
    status: "審査請求前",
    statusDetail: "公開公報の発行",
    ipcCodes: ["B60N2/24", "B60P3/345", "B60N2/34"],
  },
  {
    id: 9,
    patentNumber: "特許7766860",
    applicationNumber: "特願2025-091136",
    applicationDate: "2025/05/30",
    registrationDate: "2025/11/11",
    title: "ＡＩ解析に基づく発注図面・仕様書からの自動原価算出および安全マッチングプラットフォーム",
    inventor: "加藤　健資",
    status: "特許 有効",
    statusDetail: "登録公報の発行",
    ipcCodes: ["G06Q50/04", "G06F30/27"],
  },
  {
    id: 10,
    patentNumber: "特許7766314",
    applicationNumber: "特願2025-136718",
    applicationDate: "2025/08/20",
    registrationDate: "2025/11/10",
    title: "防犯カメラシステムによる人物の繰り返し出現の検知・記録・警告システム及び方法",
    inventor: "加藤　健資",
    status: "特許 有効",
    statusDetail: "登録公報の発行",
    ipcCodes: ["G06T7/00,660@Z", "H04N7/18@D", "G08B25/04@E"],
  },
  {
    id: 11,
    patentNumber: "特許7759043",
    applicationNumber: "特願2025-108596",
    applicationDate: "2025/06/26",
    registrationDate: "2025/10/23",
    title: "防犯カメラシステムによる人物の繰り返し出現の検知・記録・警告システム及び方法",
    inventor: "加藤　健資",
    status: "特許 有効",
    statusDetail: "登録公報の発行",
    ipcCodes: ["G06V10/62", "G06T7/00,660@Z", "H04N7/18@D"],
  },
  {
    id: 12,
    patentNumber: "特許7757578",
    applicationNumber: "特願2025-112548",
    applicationDate: "2025/07/02",
    registrationDate: "2025/10/22",
    title: "機械、システム",
    inventor: "井澤　佑斗",
    status: "特許 有効",
    statusDetail: "登録公報の発行",
    ipcCodes: ["A01G7/00,603", "A01B69/00,302", "A01D46/30"],
  },
  {
    id: 13,
    patentNumber: "特許7742067",
    applicationNumber: "特願2025-104852",
    applicationDate: "2025/06/20",
    registrationDate: "2025/09/19",
    title: "ＳＮＳ投稿監視によるプライバシー保護システム及び方法",
    inventor: "加藤　健資",
    status: "特許 有効",
    statusDetail: "登録公報の発行",
    ipcCodes: ["G06Q50/26,300", "G06Q50/00,300"],
  },
  {
    id: 14,
    patentNumber: "特許7734940",
    applicationNumber: "特願2025-068380",
    applicationDate: "2025/04/17",
    registrationDate: "2025/09/08",
    title: "注文方法、注文装置",
    inventor: "井澤　佑斗",
    status: "特許 有効",
    statusDetail: "登録公報の発行",
    ipcCodes: ["G06Q50/12"],
  },
  {
    id: 15,
    patentNumber: "特許7730128",
    applicationNumber: "特願2025-060772",
    applicationDate: "2025/04/01",
    registrationDate: "2025/08/27",
    title: "機械、システム、方法",
    inventor: "井澤　佑斗",
    status: "特許 有効",
    statusDetail: "登録公報の発行",
    ipcCodes: ["G06Q30/06", "G06Q50/10"],
  },
  {
    id: 16,
    patentNumber: "特許7720068",
    applicationNumber: "特願2024-225259",
    applicationDate: "2024/12/20",
    registrationDate: "2025/08/07",
    title: "移動体、移動体の作成方法",
    inventor: "井澤　佑斗",
    status: "特許 有効",
    statusDetail: "公開公報の発行",
    ipcCodes: ["B60N2/34", "B60P3/325", "B60N2/14"],
  },
  {
    id: 17,
    patentNumber: "特許7712640",
    applicationNumber: "特願2025-083902",
    applicationDate: "2025/05/20",
    registrationDate: "2025/07/24",
    title: "機械、システム",
    inventor: "井澤　佑斗",
    status: "特許 有効",
    statusDetail: "登録公報の発行",
    ipcCodes: ["A01G7/00,603", "A01B69/00,302"],
  },
  {
    id: 18,
    patentNumber: "特許7709713",
    applicationNumber: "特願2024-225127",
    applicationDate: "2024/12/20",
    registrationDate: "2025/07/17",
    title: "車または自走する移動体、ナビゲーションする方法、目的地情報伝送方法",
    inventor: "井澤　佑斗",
    status: "特許 有効",
    statusDetail: "登録公報の発行",
    ipcCodes: ["G06Q50/47", "G01C21/26@B"],
  },
  {
    id: 19,
    patentNumber: "特許7697642",
    applicationNumber: "特願2024-166201",
    applicationDate: "2024/09/25",
    registrationDate: "2025/06/24",
    title: "移動体",
    inventor: "井澤　佑斗",
    status: "特許 有効",
    statusDetail: "公開公報の発行",
    ipcCodes: ["B60N2/32", "B60P3/39", "B60N2/14"],
  },
  {
    id: 20,
    patentNumber: "特許7691670",
    applicationNumber: "特願2025-062830",
    applicationDate: "2025/04/06",
    registrationDate: "2025/06/12",
    title: "機械、システム",
    inventor: "井澤　佑斗",
    status: "特許 有効",
    statusDetail: "登録公報の発行",
    ipcCodes: ["A01G7/00,603", "A01B69/00,302", "G06Q50/02"],
  },
  {
    id: 21,
    patentNumber: "特許7689707",
    applicationNumber: "特願2025-016751",
    applicationDate: "2025/02/04",
    registrationDate: "2025/06/09",
    title: "音を作成する方法及び装置",
    inventor: "井澤　佑斗",
    status: "特許 有効",
    statusDetail: "登録公報の発行",
    ipcCodes: ["G10G1/04", "G06T7/20", "G06V40/20"],
  },
  {
    id: 22,
    patentNumber: "特許7689706",
    applicationNumber: "特願2025-003653",
    applicationDate: "2025/01/09",
    registrationDate: "2025/06/09",
    title: "住居、システム、装置",
    inventor: "井澤　佑斗",
    status: "特許 有効",
    statusDetail: "登録公報の発行",
    ipcCodes: ["G16H40/20", "G08B25/04@K", "G08B21/02"],
  },
  {
    id: 23,
    patentNumber: "特許7689703",
    applicationNumber: "特願2024-227318",
    applicationDate: "2024/12/24",
    registrationDate: "2025/06/09",
    title: "システム、方法",
    inventor: "井澤　佑斗",
    status: "特許 有効",
    statusDetail: "登録公報の発行",
    ipcCodes: ["G06Q50/00,300"],
  },
  {
    id: 24,
    patentNumber: "特許7678445",
    applicationNumber: "特願2025-022921",
    applicationDate: "2025/02/15",
    registrationDate: "2025/05/16",
    title: "注文方法、注文装置",
    inventor: "井澤　佑斗",
    status: "特許 有効",
    statusDetail: "権利の移転",
    ipcCodes: ["G06Q50/12"],
  },
  {
    id: 25,
    patentNumber: "特許7642207",
    applicationNumber: "特願2024-163184",
    applicationDate: "2024/09/19",
    registrationDate: "2025/03/10",
    title: "注文方法、注文装置",
    inventor: "井澤　佑斗",
    status: "特許 有効",
    statusDetail: "権利の移転",
    ipcCodes: ["G06Q50/12"],
  },
  {
    id: 26,
    patentNumber: "特許7635953",
    applicationNumber: "特願2024-205849",
    applicationDate: "2024/11/26",
    registrationDate: "2025/02/26",
    title: "音を作成する方法及び装置",
    inventor: "井澤　佑斗",
    status: "特許 有効",
    statusDetail: "登録公報の発行",
    ipcCodes: ["G10H1/00,102@Z", "G06T7/246", "G10G1/00"],
  },
  {
    id: 27,
    patentNumber: "特許7616622",
    applicationNumber: "特願2024-164660",
    applicationDate: "2024/09/21",
    registrationDate: "2025/01/17",
    title: "移動体をナビゲーションする方法及びタクシー",
    inventor: "井澤　佑斗",
    status: "特許 有効",
    statusDetail: "登録公報の発行",
    ipcCodes: ["G06Q50/40"],
  },
  {
    id: 28,
    patentNumber: "特許7616621",
    applicationNumber: "特願2024-112999",
    applicationDate: "2024/07/13",
    registrationDate: "2025/01/17",
    title: "移動体、移動体に椅子を配置する方法",
    inventor: "井澤　佑斗",
    status: "特許 有効",
    statusDetail: "公開公報の発行",
    ipcCodes: ["B60N2/34", "B60P3/345", "B60N2/20"],
  },
  {
    id: 29,
    patentNumber: "実登3248818",
    applicationNumber: "実願2024-002340",
    applicationDate: "2024/07/13",
    registrationDate: "2024/10/21",
    title: "移動体および移動体に備える物体",
    inventor: "井澤　佑斗",
    status: "-",
    statusDetail: "",
    ipcCodes: ["B60P3/36", "B60P3/38"],
  },
  {
    id: 30,
    patentNumber: "実登3248817",
    applicationNumber: "実願2024-002339",
    applicationDate: "2024/07/13",
    registrationDate: "2024/10/21",
    title: "移動体に備える物体及び移動体",
    inventor: "井澤　佑斗",
    status: "-",
    statusDetail: "",
    ipcCodes: ["B60P3/36", "B60P3/38"],
  },
  {
    id: 31,
    patentNumber: "特許7568248",
    applicationNumber: "特願2024-104669",
    applicationDate: "2024/06/28",
    registrationDate: "2024/10/16",
    title: "キャンピングカーに備えられる椅子およびキャンピングカーに椅子を配置する方法",
    inventor: "井澤　佑斗",
    status: "特許 有効",
    statusDetail: "公開公報の発行",
    ipcCodes: ["B60P3/36", "B60N2/32", "B60N2/34"],
  },
  {
    id: 32,
    patentNumber: "特許7544367",
    applicationNumber: "特願2024-081369",
    applicationDate: "2024/05/19",
    registrationDate: "2024/09/03",
    title: "自動通信方法および自動通信装置",
    inventor: "井澤　佑斗",
    status: "特許 有効",
    statusDetail: "公開公報の発行",
    ipcCodes: ["G06Q30/0601,310"],
  },
  {
    id: 33,
    patentNumber: "実登3248158",
    applicationNumber: "実願2024-002245",
    applicationDate: "2024/07/05",
    registrationDate: "2024/09/02",
    title: "移動体および移動体に備える物体",
    inventor: "井澤　佑斗",
    status: "-",
    statusDetail: "",
    ipcCodes: ["B60P3/36", "B60P3/38"],
  },
];

export default function PatentListSection() {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation();
  const { ref: tableRef, isVisible: tableVisible } = useScrollAnimation();

  const activePatents = patents.filter((p) => p.status === "特許 有効");
  const underReview = patents.filter((p) => p.status === "審査中" || p.status === "審査請求前");
  const utilityModels = patents.filter((p) => p.patentNumber.startsWith("実登"));

  return (
    <section id="patent-list" className="py-20 bg-white relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={sectionRef}
          className={`text-center mb-12 transition-all duration-700 ${
            sectionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            保有特許について
          </h2>
          <p className="text-sm text-gray-600 max-w-3xl mx-auto">
            TIFFIN株式会社は、AI技術をはじめとする幅広い分野で多数の特許を保有しています。
          </p>
        </div>

        <div
          ref={tableRef}
          className={`overflow-x-auto transition-all duration-700 ${
            tableVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-teal-dark">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                      No.
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                      特許番号
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                      特願番号
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                      発明の名称
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                      発明者
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                      ステータス
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                      出願日
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                      登録日
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {patents.map((patent) => (
                    <tr
                      key={patent.id}
                      className="hover:bg-gray-50 transition-colors"
                    >
                      <td className="px-4 py-3 whitespace-nowrap text-xs text-gray-900">
                        {patent.id}
                      </td>
                      <td className="px-4 py-3 text-xs text-gray-900 font-medium">
                        {patent.patentNumber}
                      </td>
                      <td className="px-4 py-3 text-xs text-gray-600">
                        {patent.applicationNumber}
                      </td>
                      <td className="px-4 py-3 text-xs text-gray-900 max-w-xs">
                        {patent.title}
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap text-xs text-gray-600">
                        {patent.inventor}
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap">
                        <span
                          className={`text-xs px-2 py-1 rounded ${
                            patent.status === "特許 有効"
                              ? "bg-green-100 text-green-800"
                              : patent.status === "審査中"
                              ? "bg-yellow-100 text-yellow-800"
                              : patent.status === "審査請求前"
                              ? "bg-blue-100 text-blue-800"
                              : "bg-gray-100 text-gray-800"
                          }`}
                        >
                          {patent.status}
                        </span>
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap text-xs text-gray-600">
                        {patent.applicationDate}
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap text-xs text-gray-600">
                        {patent.registrationDate}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-gray-600 mb-4">
            特許に関するお問い合わせは、お問い合わせフォームよりご連絡ください。
          </p>
          <a
            href="#contact"
            className="inline-block text-sm font-medium text-teal-dark hover:text-teal-dark/80 transition-colors link-underline"
          >
            お問い合わせはこちら
          </a>
        </div>
      </div>
    </section>
  );
}

