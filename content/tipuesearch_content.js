var tipuesearch = {"pages": [{'title': 'Introduction', 'text': 'leader : \n 40423207 朱修林 \n group member : \n 40423160\xa0 許育誠 \n 40423131\xa0 許承恩 \n 40623207\xa0 呂沛蓉 \n 40623218\xa0 姚浚洧 \n 40623219\xa0 \xa0蘇昱 \n 40623231\xa0 周駿麟 \n 40623237\xa0 黃博隆 \n 40623241\xa0 郭祐齊 \n 40623246\xa0 劉柏瑞 \n Assignment \n 40423207 朱修林-->onshape \n 40423160\xa0 許育誠-->onshape \n 40423131\xa0 許承恩 -->onshape \n 40623207\xa0 呂沛蓉 -->sensor \n 40623218\xa0 姚浚洧-->sensor \n 40623219\xa0 \xa0蘇\xa0 \xa0 昱 -->vrep \n 40623231\xa0 周駿麟 -->sensor \n 40623237\xa0 黃博隆 -->vrep \n 40623241\xa0 郭祐齊 -->website \n 40623246\xa0 劉柏瑞 -->website \n', 'tags': '', 'url': 'Introduction.html'}, {'title': 'Course', 'text': '', 'tags': '', 'url': 'Course.html'}, {'title': 'week1', 'text': '修改start.bat \n \n', 'tags': '', 'url': 'week1.html'}, {'title': 'week2', 'text': '\n \n https://2019wcm.blogspot.com/search/label/ungit \n 建立 Windows 64 位元可攜程式系統 \n \n \n \n 如何使用 ungit 進行倉儲內容的新增提交與推送 \n \n', 'tags': '', 'url': 'week2.html'}, {'title': 'week3', 'text': '修改start.bat，以及 如何在可攜程式系統中配置 ungit \n \n \n \n 利用 ungit 在倉儲個提交點設定 tag, 然後利用 git checkout 指令帶出各版本內容 \n \n \n \n \n 根據\xa0 https://2019wcm.blogspot.com/2019/03/ungit.html \xa0的設定, 完成 ungit 配置. \n 1. 下載 ungit 與 node.js 程式碼 \n 2. 解開壓縮檔案, 然後將 nodejs 放入 kmol_2019 的 data 目錄中 \n 3. 設定啟動 start.bat 中的 ungit 命列列搜尋路徑 \n set path8=%Disk%:\\nodejs;%Disk%:\\nodejs\\appdata\\roaming\\npm; \n 4.將 path8 納入 path 設定 \n path=%path%;%path1%;%path2%;%path3%;%path4%;%path5%;%path6%;%path7%;%Disk%:\\p37\\site-packages\\scipy\\extra_dll;%Disk%:\\scite\\bin; %path8%; \n \n 5.為了讓 node.js 能夠使用 y:\\home 作為使用者目錄, 在 start.bat 中加入 \n set USERPROFILE=%Disk%:\\home \n \n ssh 連結 github 倉儲 \n ProxyCommand y:/PortableGit/mingw64/bin/connect.exe -H proxy.kmol.info:3128 %h %p\n\n# for mdecourse\nHost github.com_mdecourse\n    User git\n    Port 22\n    Hostname github.com\n\n    IdentityFile "y:\\home\\.ssh\\id_rsa_mdecourse"\n\n    TCPKeepAlive yes\n    IdentitiesOnly yes \n \n', 'tags': '', 'url': 'week3.html'}, {'title': 'Independent study', 'text': '', 'tags': '', 'url': 'Independent study.html'}, {'title': 'w5', 'text': 'onshape草圖 \n 1.草圖 \n \n 2.針對手足球桿子及取球區的部分修改 \n \n 3.取球區完整化，且在守門員旁增加彈簧，防止撞擊 \n \n', 'tags': '', 'url': 'w5.html'}, {'title': 'w6', 'text': 'vrep 模擬(Bubble Rob) \n 一開始以為圓柱的範圍隨便調就好，沒想到球竟然會反彈出去 \n \n \n 後來經過修正後才完成 \n \n', 'tags': '', 'url': 'w6.html'}, {'title': 'w7', 'text': '', 'tags': '', 'url': 'w7.html'}, {'title': 'w8', 'text': 'v-rep模擬 \n 網誌維護出現錯誤，並修正', 'tags': '', 'url': 'w8.html'}, {'title': 'w9', 'text': '', 'tags': '', 'url': 'w9.html'}, {'title': 'V-rep', 'text': '', 'tags': '', 'url': 'V-rep.html'}, {'title': 'Tutorial', 'text': '\n \n ▲BubbleRob \n', 'tags': '', 'url': 'Tutorial.html'}, {'title': 'BubbleRob', 'text': "\n \n Add a primitive sphere of diameter 0.2 to the scene with [Menu bar --> Add --> Primitive shape --> Sphere]. \n Adjust the  X-size  item to 0.2, then click  OK .  \n Start the simulation (<control-space>, and copy-and-paste the created sphere (with <control-c> then <control-v>). \n Enable   Collidable \xa0 ,  Measurable \xa0 ,  \xa0 Renderable  and  \xa0 Detectable  in the object common properties for that shape. \n Open the  \xa0 position dialog  on the  translation  tab, select the sphere representing BubbleRob's body, and enter 0.02 for  Along Z . \n Make sure that the  Relative to -item is set to  World . Then we click  Translate selection . \n Edit sphere's name. We enter  bubbleRob  and press enter. \n Add a  proximity sensor  so that  BubbleRob  knows when it is approaching obstacles: we select [Menu bar --> Add --> Proximity sensor --> Cone type]. \n In the orientation dialog on the\xa0 Rotation  tab, we enter 90 for  Around Y  and for  Around Z , then click  Rotate selection . \n In the  \xa0 position dialog , on the  position  tab, we enter 0.1 for  X-coord . and 0.12 for  Z-coord . \n Open  its properties  dialog. \n Click  Show volume parameter  to open the  \xa0 proximity sensor volume dialog . \n Adjust items  Offset  to 0.005,  Angle  to 30 and  Range  to 0.15. \n In the  proximity sensor properties , we click \xa0 Show detection parameters . \n Uncheck item  Don't allow detections if distance smaller than  then close that dialog again. \n Edit proximity sensor's name. We enter  bubbleRob_sensingNose  and press enter. Select  bubbleRob_sensingNose , then control-select bubbleRob, then click [Menu bar --> Edit --> Make last selected object parent]. \n This is what we now have: \n Create a new scene with [Menu bar --> File --> New scene]. \n Enable  \xa0 Collidable , \xa0 Measurable , \xa0 Renderable \xa0 and \xa0 Detectable  in the \xa0 object common properties \xa0 for that cylinder. \n Set the cylinder's absolute position to (0.05,0.1,0.04) and its absolute orientation to (-90,0,0). \n Change the name to  bubbleRob_leftWheel . \n Copy and paste the wheel, and set the absolute Y coordinate of the copy to -0.1. \n We rename the copy to  bubbleRob_rightWheel. \n Select the two wheels, copy them, then switch back to scene 1, then paste the wheels. \n Click [Menu bar --> Add --> Joint --> Revolute] to add a revolute joint to the scene. \n Keep the joint selected, then control-select  bubbleRob_leftWheel . \n In the  position dialog , on the  position  tab, we click the  Apply to selection  button. \n \n In the  orientation dialog , on the orientation tab, we do the same. \n \n Rename the joint to  bubbleRob_leftMotor . \n Click  Show dynamic parameters  to open the  \xa0 joint dynamics properties  dialog. \n Enable the motor , and check item Lock motor when target velocity is zero. \n Repeat the same procedure for the right motor and rename it to  bubbleRob_rightMotor . \n Attach the left wheel to the left motor, the right wheel to the right motor, then attach the two motors to  bubbleRob . \n This is what we have: \n In a new scene we and add a pure primitive sphere with diameter 0.05 and make the sphere  \xa0 Collidable , \xa0 Measurable , \xa0 Renderable \xa0and\xa0 Detectable  (if not already enabled), then rename it to bubbleRob_slider. \n Add a  force sensor objec t  with [Menu bar --> Add --> Force sensor]. \n Rename it to  bubbleRob_connection  and shift it up by 0.05. \n Attach the slider to the force sensor, then copy both objects, switch back to scene 1 and paste them. \n Shift the force sensor by -0.07 along the absolute X-axis, then attach it to the robot body. \n If we run the simulation now, we can notice that the slider is slightly moving in relation to the robot body. \n In the  shape dynamics properties ,  for  bubbleRob_slider  we set the  local respondable mask  to 00001111, and for bubbleRob, we set the  local respondable mask  to 11110000. \n If we run the simulation again, we can notice that both objects do not interfere anymore. \n This is what we now have: \n Select the two wheels and the slider, and in the shape dynamics dialog we click three times  M=M*2 (for selection) . \n The effect is that all selected shapes will have their masses multiplied by 8. \n Do the same with the inertias of the 3 selected shapes. \n Run the simulation again. \n Set the  Target velocity  to 50 for both motors. \n We run the simulation:  BubbleRob  now moves forward and eventually falls off the floor. \n Reset the  Target velocity  item to zero for both motors. \n Click [Menu bar --> Tools --> Collections] to open the  collection dialog . \n In the collection dialog, we click  Add new collection . \n While the new collection item is selected in the list, select  bubbleRob  in the scene hierarchy, and then click  Add  in the collection dialog. \n To edit the collection name, we double-click it, and rename it to  bubbleRob_collection . \n Open the  distance dialog  with [Menu bar --> Tools --> Calculation module properties]. \n In the distance dialog, we click  Add new distance object  and select a distance pair: [collection]  bubbleRob_collection  -  all other measurable objects  in the scene.  \n Rename the distance object to  bubbleRob_distance  with a double-click in its name. \n Click [Menu bar --> Add --> Graph] and rename it to  bubbleRob_graph . \n Attach the graph to bubbleRob, and set the graph's absolute coordinates to (0,0,0.005). \n Open the graph properties dialog by double-clicking its icon in the scene hierarchy. \n Uncheck  Display XYZ -planes, then click  Add new data stream to record  and select\xa0 Object: absolute x-position  for the  Data stream type , and  bubbleRob_graph  for the  Object / item to record . \n Also want to record the y and z positions: we add those data streams in a similar way as above. \n Click  Add new data stream to record  and select  Distance: segment length  for the  Data stream type , and  bubbleRob_distance  for the  Object / item to record . \n In the  Data stream recording list , we now rename Data to bubbleRob_x_pos, Data0 to bubbleRob_y_pos, Data1 to bubbleRob_z_pos, and Data2 to bubbleRob_obstacle_dist. \n Select  bubbleRob_x_pos  in the  Data Stream recording list  and in the  Time graph properties  section, uncheck  Visible . We do the same for  bubbleRob_y_pos  and  bubbleRob_z_pos . \n Click  Edit 3D curves  to open the  \xa0 XY graph and 3D curve dialog , then click  Add new curve . \n In the dialog that pops open, we select  bubbleRob_x_pos  for the  X-value  item,  bubbleRob_y_pos  for the  Y-value  item and  bubbleRob_z_po s for the  Z-value  item.  \n Rename the newly added curve from Curve to  bubbleRob_path . \n Check the  Relative to world \xa0 item and set \xa0 Curve width  to 4. \n Set one motor  target velocity  to 50, run the simulation, and will see  BubbleRob's trajectory  displayed in the scene.  \n \n \n \n Stop the simulation and reset the motor target velocity to zero. \n Add a pure primitive cylinder with following dimensions: (0.1, 0.1, 0.2). \n Disable  \xa0 Body is dynamic \xa0 in the \xa0 shape dynamics properties . \n Want our cylinder to be  Collidable , \xa0 Measurable , \xa0 Renderable \xa0 and \xa0 Detectable . \n The cylinder is still selected, we click the object translation toolbar button. \n Drag any point in the scene: the cylinder will follow the movement while always being constrained to Keep the same Z-coordinate. \n Copy and paste the cylinder a few times, and move them to positions around  BubbleRob. \n Set a  target velocity  of 50 for the left motor and run the simulation: the graph view now displays the distance to the closest obstacle and the distance segment is visible in the scene too. \n Stop the simulation and reset the target velocity to zero. \n Check items  Object is model bas e and  Object/model can transfer or accept DNA  in the  \xa0 object common properties . \n Select the two joints, the proximity sensor and the graph, then enable item  Igonred by model bounding box  and click  Apply to selection . \n Disable  camera visibility layer  2, and enable  camera visibility layer  10 for the two joints and the force sensor: this effectively hides the two joints and the force sensor \n Select the vision sensor, the two wheels, the slider, and the graph, then enable item  Select base of model instead . \n Click [Menu bar --> Add --> Vision sensor --> Perspective type]. \n Set the local position and orientation of the vision sensor to (0,0,0). \n At the same position and orientation as BubbleRob's proximity sensor. \n Open  its properties  dialog. \n Set the  Far clipping plane  item to 1, and the  Resolution x  and  Resolution y  items to 256 and 256. \n Open the  vision sensor filter dialog  by clicking  Show filter dialog . \n Select the filter component  Edge detection on work image  and click  Add filter . \n Position the newly added filter in second position (one position  up , using the up button). \n Double-click the newly added filter component and adjust its  Threshold  item to 0.2, then click  OK . \n Added floating view, right-click [Popup menu --> View --> Associate view with selected vision sensor](make sure the vision sensor is selected during that process). \n Start the simulation, then stop it again. \n Select bubbleRob and click [Menu bar --> Add --> Associated child script --> Non threaded]. \n Double-click the little script icon that appeared next to bubbleRob's name in the scene hierarchy. \n Copy and paste following code into the  \xa0 script editor , then close it: \n \n \n Run the simulation. BubbleRob now moves forward while trying to avoid obstacles. \n \n", 'tags': '', 'url': 'BubbleRob.html'}, {'title': 'Experience', 'text': '', 'tags': '', 'url': 'Experience.html'}, {'title': '2019.03.15', 'text': '', 'tags': '', 'url': '2019.03.15.html'}, {'title': '40423207-4', 'text': '', 'tags': '', 'url': '40423207-4.html'}, {'title': '40423160-4', 'text': '', 'tags': '', 'url': '40423160-4.html'}, {'title': '40423131-4', 'text': '建立可攜系統: \n 1.將Python、Scite、HxD、Kdiff3和TinyC都下載好，解壓 縮。 \n \n \n \n \n \n \n \n \n ......等等軟體。 2.安裝 \n (1)python安裝 \n 在Optional Features介面 ，勾選2 3 5。並選擇要安裝的位置。 \n (2)打開HxD，對P37->Scripts裡的pip檔做更改，先用搜尋找C:，之後修改成y:\\p37\\python \n \n 3.打開Scite，打開SciTEGlobal.properties 之後搜尋code，修改298行和299行 \n \n 4.在資料夾中搜尋cpp，修改475行和476行，新增cc=y:\\tcc\\tcc.exe -run\xa0和ccc=y:\\tcc\\tcc.exe -run這兩行 \n \n 5.在資料夾中搜尋python，修改152行和160行 \n \n 6.在scite中建立兩個新的檔案，其中一個存為start.bat，另一個存為stop.bat \n', 'tags': '', 'url': '40423131-4.html'}, {'title': '40623207-4', 'text': '', 'tags': '', 'url': '40623207-4.html'}, {'title': '40623218-4', 'text': '', 'tags': '', 'url': '40623218-4.html'}, {'title': '40623219-4', 'text': '', 'tags': '', 'url': '40623219-4.html'}, {'title': '40623231-4', 'text': '在2下這個學期也是和上學期一樣一起協同倉儲， 但是組員是用程式亂數抽籤分配，並開始分工， 從擅長的事選擇起。 \n 1. 將Python、Scite、HxD、Kdiff3、TinyC下載下來，然後再將每個進行解壓縮。 \n \n \n \n \n 選擇下載位置 \n \n \n \n \n \n \n \n \n \n \n \n', 'tags': '', 'url': '40623231-4.html'}, {'title': '40623237-4', 'text': '', 'tags': '', 'url': '40623237-4.html'}, {'title': '40623241-4', 'text': '心得 : 這學期開始也是要協同，目標為完成手足球，並且用vrep模擬，希望可以再多學一些東西，第三組的各位加油!!', 'tags': '', 'url': '40623241-4.html'}, {'title': '40623246-4', 'text': '', 'tags': '', 'url': '40623246-4.html'}, {'title': '2019.03.22', 'text': '', 'tags': '', 'url': '2019.03.22.html'}, {'title': '40423207-5', 'text': '3D零組件繪製與組立 \n \n 我被分配到的工作是，繪製零件Base Axis Spring and Assembly. \n First version: \n https://cad.onshape.com/documents/1bd73a7377db9cdd414172b8/v/71ab26de068db58e144729e8/e/c4e969cbf203359939bd4541 \n Second version: \n https://cad.onshape.com/documents/1bd73a7377db9cdd414172b8/v/7f491ce597fcd767b9cb0127/e/c4e969cbf203359939bd4541 \n Third\xa0version: \n https://cad.onshape.com/documents/1bd73a7377db9cdd414172b8/w/324e3c900c47a65ea715f134/e/c4e969cbf203359939bd4541 \n 繪製過程描述 \n First version \n 1.按照老師給的plarer尺寸設計Base的形狀與公差。 \n 2.將另一組員繪製的player與我繪製的Base and Axis做組立。 \n 3.與組員討論繪製結果，組員提出無接球機構、把手不美觀、球員移動距離設定不良等問題。 \n \n \n Second version: \n 1.繪製一個接球容器，加大把手與優化形狀，加長桿子長度。 \n 2.改變plarer約束的距離。 \n 3.繪製完與組員再次討論，我們發現把球取出時會有困難，與最外側人偶應該要多加零件去約束人偶移動距離，同時緩衝對人偶造成的撞擊。 \n \n \n \n Third version: \n 1.新增了一個開門機構與固定銷。 \n 2.新增彈簧。 \n 3.立體繪製與組立到第三版本暫時結束，下兩週會往v-rep模擬任務作前進。 \n \n \n', 'tags': '', 'url': '40423207-5.html'}, {'title': '40423160-5', 'text': '\n 這個禮拜是第一次分組作業, 我被分配到的任務是畫手足球員 \n 參考老師給的尺寸\xa0 \n http://mde.tw/cd2019/content/%E5%AF%A6%E7%BF%92%E4%BB%BB%E5%8B%99%E4%BA%8C.html \n 然後作稍為的微調 \n 這是我畫的足球員 \n https://cad.onshape.com/documents/1bd73a7377db9cdd414172b8/w/324e3c900c47a65ea715f134/e/b11029a44b92b2093616ddc6 \n 畫完後就讓繪製足球架的同學去加入到手足球系統裡面 \n', 'tags': '', 'url': '40423160-5.html'}, {'title': '40423131-5', 'text': '', 'tags': '', 'url': '40423131-5.html'}, {'title': '40623207-5', 'text': '', 'tags': '', 'url': '40623207-5.html'}, {'title': '40623218-5', 'text': '', 'tags': '', 'url': '40623218-5.html'}, {'title': '40623219-5', 'text': '', 'tags': '', 'url': '40623219-5.html'}, {'title': '40623231-5', 'text': '這禮拜分工大都分完了，我被分到投影片和報告 的工作，因為剛開始沒甚麼我的事所以先幫忙組 員用V-rep的模擬。 \n', 'tags': '', 'url': '40623231-5.html'}, {'title': '40623237-5', 'text': '', 'tags': '', 'url': '40623237-5.html'}, {'title': '40623241-5', 'text': '心得：今天是第五週上課，既分組後第一次開放充裕的時間讓大家在課堂上討論，而我們這組也快速地選了組長並分配工作，這是我選維護網誌，選一個沒做過的工作試試看，有點不太知道怎麼上手，但相信只要每週有持續更新就會漸漸有東西表現出來!', 'tags': '', 'url': '40623241-5.html'}, {'title': '40623246-5', 'text': '', 'tags': '', 'url': '40623246-5.html'}, {'title': '2019.03.29', 'text': '', 'tags': '', 'url': '2019.03.29.html'}, {'title': '40423207-6', 'text': '', 'tags': '', 'url': '40423207-6.html'}, {'title': '40423160-6', 'text': '', 'tags': '', 'url': '40423160-6.html'}, {'title': '40423131-6', 'text': '', 'tags': '', 'url': '40423131-6.html'}, {'title': '40623207-6', 'text': '', 'tags': '', 'url': '40623207-6.html'}, {'title': '40623218-6', 'text': '', 'tags': '', 'url': '40623218-6.html'}, {'title': '40623219-6', 'text': '', 'tags': '', 'url': '40623219-6.html'}, {'title': '40623231-6', 'text': '這星期在V-rep的模擬遇到最大的困難 http://www.coppeliarobotics.com/helpFiles/en/bubbleRobTutorial.htm 全都是英文，所以時間大都花在翻譯上面，翻譯 完才知道怎麼去模擬。 \n \n \n', 'tags': '', 'url': '40623231-6.html'}, {'title': '40623237-6', 'text': '', 'tags': '', 'url': '40623237-6.html'}, {'title': '40623241-6', 'text': '心得：這週我把網站的架構用出來了，大家也陸陸續續開始推東西上來，透過群組的溝通維護網誌輕鬆多了，每個人再推之前都會先說一下，結束後也都會告知，才不會出現往治亂掉的狀況，不需要做太多複雜的維護。', 'tags': '', 'url': '40623241-6.html'}, {'title': '40623246-6', 'text': '', 'tags': '', 'url': '40623246-6.html'}, {'title': '2019.04.05', 'text': '', 'tags': '', 'url': '2019.04.05.html'}, {'title': '40423207-7', 'text': '', 'tags': '', 'url': '40423207-7.html'}, {'title': '40423160-7', 'text': '', 'tags': '', 'url': '40423160-7.html'}, {'title': '40423131-7', 'text': '', 'tags': '', 'url': '40423131-7.html'}, {'title': '40623207-7', 'text': '', 'tags': '', 'url': '40623207-7.html'}, {'title': '40623218-7', 'text': '', 'tags': '', 'url': '40623218-7.html'}, {'title': '40623219-7', 'text': '', 'tags': '', 'url': '40623219-7.html'}, {'title': '40623231-7', 'text': '', 'tags': '', 'url': '40623231-7.html'}, {'title': '40623237-7', 'text': '', 'tags': '', 'url': '40623237-7.html'}, {'title': '40623241-7', 'text': '心得：就算是清明連假也要推一點東西，慢慢更新網站的東西才會出來！加油', 'tags': '', 'url': '40623241-7.html'}, {'title': '40623246-7', 'text': '', 'tags': '', 'url': '40623246-7.html'}, {'title': '2019.04.12', 'text': '', 'tags': '', 'url': '2019.04.12.html'}, {'title': '40423207-8', 'text': '', 'tags': '', 'url': '40423207-8.html'}, {'title': '40423160-8', 'text': '', 'tags': '', 'url': '40423160-8.html'}, {'title': '40423131-8', 'text': '', 'tags': '', 'url': '40423131-8.html'}, {'title': '40623207-8', 'text': '', 'tags': '', 'url': '40623207-8.html'}, {'title': '40623218-8', 'text': '', 'tags': '', 'url': '40623218-8.html'}, {'title': '40623219-8', 'text': '', 'tags': '', 'url': '40623219-8.html'}, {'title': '40623231-8', 'text': '', 'tags': '', 'url': '40623231-8.html'}, {'title': '40623237-8', 'text': '', 'tags': '', 'url': '40623237-8.html'}, {'title': '40623241-8', 'text': '心得：下禮拜就是期中考週了，大家都陸陸續續的加東西上來，希望期中考週以前就可以完成９成的進度', 'tags': '', 'url': '40623241-8.html'}, {'title': '40623246-8', 'text': '\n', 'tags': '', 'url': '40623246-8.html'}, {'title': 'Git http and ssh', 'text': '利用 ssh 對 git 改版, 必須使用\xa0 home/.ssh/config 設定, 才能透過 proxy 伺服器進行連線, 由於在 IPv6 環境下, 必須要透過 proxy 才能對 Git 連線, 因此若無 config, 無法對遠端改版 \n ProxyCommand y:/PortableGit/mingw64/bin/connect.exe -H 140.130.17.53:3128 %h %p\n\nHost github.com\nUser git\nPort 22\nHostname github.com\n\nIdentityFile "y:\\home\\.ssh\\id_rsa"\n\nTCPKeepAlive yes\nIdentitiesOnly yes\n\nHost ssh.github.com\nUser git\nPort 443\nHostname ssh.github.com\n\nIdentityFile "y:\\home\\.ssh\\id_rsa"\n\nTCPKeepAlive yes\nIdentitiesOnly yes \n \n', 'tags': '', 'url': 'Git http and ssh.html'}, {'title': 'Directory Structure', 'text': '第二位想要編輯這裡 \n \n CMSimfly 的動態系統採用 Python3 + Flask 建構, 並且利用 Beatifulsoup 解讀位於 contig 目錄中的 content.htm 超文件檔案. \n content.htm 檔案可以透過動態系統中的 generate_pages 功能, 將超文件轉為位於 content 目錄中的個別頁面檔案. \n 動態系統與靜態系統則共用 downloads, images, static 等目錄, 其中 downloads 目錄存放在動態系統上傳的文件檔, 而 images 目錄則存放動態系統所上傳的影像檔案, 包括 jpg, png 與 gif 等格式圖檔. \n static 目錄則存放在動態與靜態系統所需要的 Javascript 或 Brython 程式檔. \n 還有這裡 \n 首先修改這裡 \n \n', 'tags': '', 'url': 'Directory Structure.html'}, {'title': 'Page editing', 'text': 'CMSimfly 動態系統的網際編輯器採用  TinyMCE4 , 可以放入一般超文件,\xa0 納入圖檔, 嵌入影片連結, 並且加入帶有行數的原始碼. \n 透過 File Upload 功能, 可以一次上傳多個檔案,\xa0 存入 downloads 目錄中儲存, 之後各頁面可以引入對應連結. \n 而圖檔的上傳與引用與一般檔案類似, 但上傳後存入 images 目錄中. \n', 'tags': '', 'url': 'Page editing.html'}, {'title': 'Insert code', 'text': 'CMSimfly 目前使用 Syntaxhighlighter 3.0.83: \n \xa0 http://alexgorbatchev.com/SyntaxHighlighter/ \xa0 \n 進行頁面中的程式碼高亮顯示. \n', 'tags': '', 'url': 'Insert code.html'}, {'title': 'Java cold', 'text': 'import java.util.Scanner;\n\npublic class Life {\n    public static void show(boolean[][] grid){\n        String s = "";\n        for(boolean[] row : grid){\n            for(boolean val : row)\n                if(val)\n                    s += "*";\n                else\n                    s += ".";\n            s += "\\n";\n        }\n        System.out.println(s);\n    }\n    \n    public static boolean[][] gen(){\n        boolean[][] grid = new boolean[10][10];\n        for(int r = 0; r < 10; r++)\n            for(int c = 0; c < 10; c++)\n                if( Math.random() > 0.7 )\n                    grid[r][c] = true;\n        return grid;\n    }\n    \n    public static void main(String[] args){\n        boolean[][] world = gen();\n        show(world);\n        System.out.println();\n        world = nextGen(world);\n        show(world);\n        Scanner s = new Scanner(System.in);\n        while(s.nextLine().length() == 0){\n            System.out.println();\n            world = nextGen(world);\n            show(world);\n            \n        }\n    }\n    \n    public static boolean[][] nextGen(boolean[][] world){\n        boolean[][] newWorld \n            = new boolean[world.length][world[0].length];\n        int num;\n        for(int r = 0; r < world.length; r++){\n            for(int c = 0; c < world[0].length; c++){\n                num = numNeighbors(world, r, c);\n                if( occupiedNext(num, world[r][c]) )\n                    newWorld[r][c] = true;\n            }\n        }\n        return newWorld;\n    }\n    \n    public static boolean occupiedNext(int numNeighbors, boolean occupied){\n        if( occupied && (numNeighbors == 2 || numNeighbors == 3))\n            return true;\n        else if (!occupied && numNeighbors == 3)\n            return true;\n        else\n            return false;\n    }\n\n    private static int numNeighbors(boolean[][] world, int row, int col) {\n        int num = world[row][col] ? -1 : 0;\n        for(int r = row - 1; r <= row + 1; r++)\n            for(int c = col - 1; c <= col + 1; c++)\n                if( inbounds(world, r, c) && world[r][c] )\n                    num++;\n\n        return num;\n    }\n\n    private static boolean inbounds(boolean[][] world, int r, int c) {\n        return r >= 0 && r < world.length && c >= 0 &&\n        c < world[0].length;\n    }\n\n} \n \n', 'tags': '', 'url': 'Java cold.html'}, {'title': 'Python\xa0cold', 'text': 'def parse_content():\n    """use bs4 and re module functions to parse content.htm"""\n    #from pybean import Store, SQLiteWriter\n    # if no content.db, create database file with cms table\n    \'\'\'\n    if not os.path.isfile(config_dir+"content.db"):\n        library = Store(SQLiteWriter(config_dir+"content.db", frozen=False))\n        cms = library.new("cms")\n        cms.follow = 0\n        cms.title = "head 1"\n        cms.content = "content 1"\n        cms.memo = "first memo"\n        library.save(cms)\n        library.commit()\n    \'\'\'\n    # if no content.htm, generate a head 1 and content 1 file\n    if not os.path.isfile(config_dir+"content.htm"):\n        # create content.htm if there is no content.htm\n        File = open(config_dir + "content.htm", "w", encoding="utf-8")\n        File.write("<h1>head 1</h1>content 1")\n        File.close()\n    subject = file_get_contents(config_dir+"content.htm")\n    # deal with content without content\n    if subject == "":\n        # create content.htm if there is no content.htm\n        File = open(config_dir + "content.htm", "w", encoding="utf-8")\n        File.write("<h1>head 1</h1>content 1")\n        File.close()\n        subject = "<h1>head 1</h1>content 1"\n    # initialize the return lists\n    head_list = []\n    level_list = []\n    page_list = []\n    # make the soup out of the html content\n    soup = bs4.BeautifulSoup(subject, \'html.parser\')\n    # 嘗試解讀各種情況下的標題\n    soup = _remove_h123_attrs(soup)\n    # 改寫 content.htm 後重新取 subject\n    with open(config_dir + "content.htm", "wb") as f:\n        f.write(soup.encode("utf-8"))\n    subject = file_get_contents(config_dir+"content.htm")\n    # get all h1, h2, h3 tags into list\n    htag= soup.find_all([\'h1\', \'h2\', \'h3\'])\n    n = len(htag)\n    # get the page content to split subject using each h tag\n    temp_data = subject.split(str(htag[0]))\n    if len(temp_data) > 2:\n        subject = str(htag[0]).join(temp_data[1:])\n    else:\n        subject = temp_data[1]\n    if n >1:\n            # i from 1 to i-1\n            for i in range(1, len(htag)):\n                head_list.append(htag[i-1].text.strip())\n                # use name attribute of h* tag to get h1, h2 or h3\n                # the number of h1, h2 or h3 is the level of page menu\n                level_list.append(htag[i-1].name[1])\n                temp_data = subject.split(str(htag[i]))\n                if len(temp_data) > 2:\n                    subject = str(htag[i]).join(temp_data[1:])\n                else:\n                    subject = temp_data[1]\n                # cut the other page content out of htag from 1 to i-1\n                cut = temp_data[0]\n                # add the page content\n                page_list.append(cut)\n    # last i\n    # add the last page title\n    head_list.append(htag[n-1].text.strip())\n    # add the last level\n    level_list.append(htag[n-1].name[1])\n    temp_data = subject.split(str(htag[n-1]))\n    # the last subject\n    subject = temp_data[0]\n    # cut the last page content out\n    cut = temp_data[0]\n    # the last page content\n    page_list.append(cut)\n    return head_list, level_list, page_list\n\n \n \n', 'tags': '', 'url': 'Python\xa0cold.html'}, {'title': 'C\xa0 \xa0C++ cold', 'text': '請注意, 目前 CMSimfly 標題內文無法解讀 "/" 符號, 因此若本頁面的標題為\xa0 "C/C++程式碼", 則無法進行分頁. \n /* Runge Kutta for a set of first order differential equations */\n \n#include <stdio.h>\n#include <math.h>\n \n#define N 2 /* number of first order equations */\n#define dist 0.1 /* stepsize in t*/\n#define MAX 30.0 /* max for t */\n \nFILE *output; /* internal filename */\nFILE *output1; /* internal filename */\n// 利用 pipe 呼叫 gnuplot 繪圖\nFILE *pipe;\n \nvoid runge4(double x, double y[], double step); /* Runge-Kutta function */\ndouble f(double x, double y[], int i); /* function for derivatives */\n \nvoid main(){\n \n  double t, y[N];\n  int j;\n \n  output=fopen("osc.dat", "w"); /* external filename */\n  output1=fopen("osc1.dat", "w"); /* external filename */\n \n  y[0]=1.0; /* initial position */\n  y[1]=0.0; /* initial velocity */\n \n  //fprintf(output, "0\\t%f\\n", y[0]);\n \n  for (j=1; j*dist<=MAX ;j++) /* time loop */{\n \n    t=j*dist;\n    runge4(t, y, dist);\n    fprintf(output, "%f\\t%f\\n", t, y[0]);\n    fprintf(output1, "%f\\t%f\\n", t, y[1]);\n  }\n \n  fclose(output);\n  fclose(output1);\n \n  pipe = popen("gnuplot -persist","w");\n  //fprintf(pipe,"set term png enhanced font \\"v:/fireflysung.ttf\\" 18 \\n");\n  fprintf(pipe,"set term png enhanced font \\"y:/wqy-microhei.ttc\\" 18 \\n");\n  //fprintf(pipe,"set yrange [68:70]\\n");\n  fprintf(pipe,"set output \\"test.png\\"\\n");\n  fprintf(pipe, "plot \\"osc.dat\\" title \\"位移\\" with lines, \\"osc1.dat\\" title \\"速度\\" with lines\\n");\n  fprintf(pipe,"quit\\n");\n\n  fprintf(pipe,"quit\\n");\n  pclose(pipe);\n}\n \nvoid runge4(double x, double y[], double step){\n \n  double h=step/2.0, /* the midpoint */\n  t1[N], t2[N], t3[N], /* temporary storage arrays */\n  k1[N], k2[N], k3[N],k4[N]; /* for Runge-Kutta */\n  int i;\n \n  for (i=0;i<N;i++){\n \n    t1[i]=y[i]+0.5*(k1[i]=step*f(x,y,i));\n  }\n \n  for (i=0;i<N;i++){\n \n    t2[i]=y[i]+0.5*(k2[i]=step*f(x+h, t1, i));\n  }\n \n  for (i=0;i<N;i++){\n \n    t3[i]=y[i]+ (k3[i]=step*f(x+h, t2, i));\n  }\n \n  for (i=0;i<N;i++){\n \n    k4[i]= step*f(x+step, t3, i);\n  }\n \n  for (i=0;i<N;i++){\n \n    y[i]+=(k1[i]+2*k2[i]+2*k3[i]+k4[i])/6.0;\n  }\n}\n \ndouble f(double x, double y[], int i){\n \n  if (i==0)\n    x=y[1]; /* derivative of first equation */\n  if (i==1)\n    x=-y[0]-0.5*y[1];\n  return x;\n} \n \n', 'tags': '', 'url': 'C\xa0 \xa0C++ cold.html'}, {'title': 'Lua\xa0\xa0cold', 'text': '-- 導入 js 模組\njs = require("js")\n-- 取得 window\nwindow = js.global\n-- 猜小於或等於 n 的整數\nbig = 100\n-- 計算猜測次數, 配合 while 至少會猜一次\nnum = 1\n-- 利用 window:prompt 方法回應取得使用者所猜的整數\nguess = window:prompt("請猜一個介於 1 到 "..big.." 的整數")\n-- 利用數學模組的 random 函數以亂數產生答案\nanswer = math.random(big)\noutput = ""\n-- 若沒猜對, 一直猜到對為止\nwhile answer ~= tonumber(guess) do\n    if answer > tonumber(guess) then\n        output = "猜第 "..num.." 次, guess="..guess..", answer="..answer.." - too small"\n        print(output)\n    else\n        output = "猜第 "..num.." 次, guess="..guess..", answer="..answer.." - too big"\n        print(output)\n    end \n    guess = window:prompt(output..", 請猜一個介於 1 到 "..big.." 的整數")\n    num = num + 1\nend\nprint("總共猜了 "..num.." 次, answer=guess="..answer.." - correct")\n     \n \n', 'tags': '', 'url': 'Lua\xa0\xa0cold.html'}, {'title': 'Javascript\xa0 cold', 'text': 'STLViewer = function(stlpath, plotarea) {\n\n\tvar mycanvas = document.getElementById(plotarea);\n\tvar viewer = new JSC3D.Viewer(mycanvas)\n\tvar theScene = new JSC3D.Scene;\n\t////Initialize with a default file:\n\t//var stlpath = "../../../assets/2013-10-23/stl/box.STL"\n\t//var stlpath = "../../../assets/2013-10-23/stl/taj.stl"\n\tviewer.setParameter(\'SceneUrl\', stlpath);\n    viewer.setParameter(\'InitRotationX\', 20);\n\tviewer.setParameter(\'InitRotationY\', 20);\n\tviewer.setParameter(\'InitRotationZ\', 0);\n\tviewer.setParameter(\'ModelColor\', \'#CAA618\');\n\tviewer.setParameter(\'BackgroundColor1\', \'#FFFFFF\');\n\tviewer.setParameter(\'BackgroundColor2\', \'#383840\');\n\tviewer.init();\n\tviewer.update();\n\t////init done\n\tvar canvas_drop = document.getElementById(\'canvas-drop\')\n\t/*var dropzone = document.getElementById(\'dropzone\')\n\tdropzone.addEventListener(\'dragover\', handleDragOver, false);\n\tdropzone.addEventListener(\'drop\', handleFileSelect, false); */\n\tcanvas_drop.addEventListener(\'dragover\', handleDragOver, false);\n\tcanvas_drop.addEventListener(\'drop\', handleFileSelect, false);\n\n////Drag and drop logic:\n\tfunction handleFileSelect(evt) {\n\t    evt.stopPropagation();\n\t    evt.preventDefault();\n\t    var files = evt.dataTransfer.files;\n\t    console.log(evt)\n\t    console.log(files)\n\t    preview_stl(files[0])\n\t  }\n\n\t  function handleDragOver(evt) {\n\t    evt.stopPropagation();\n\t    evt.preventDefault();\n\t    evt.dataTransfer.dropEffect = \'copy\';\n\t  }\n\n////jsc3d logic\n\tvar handle_file_select = function(e) {\n\t\te.stopPropagation()\n\t\te.preventDefault()\n\t\tvar f = e.target.files[0]\n\t\tpreview_stl(f)\n\t}\n\n\tfunction preview_stl(f) {\n\t\tvar reader = new FileReader()\n\t\tvar ext = f.name.split(".")[1]\n\n\t\tfunction setup_viewer() {\n\t\t\tviewer.setParameter(\'InitRotationX\', 20);\n\t\t\tviewer.setParameter(\'InitRotationY\', 20);\n\t\t\tviewer.setParameter(\'InitRotationZ\', 0);\n\t\t\tviewer.setParameter(\'ModelColor\', \'#CAA618\');\n\t\t\tviewer.setParameter(\'BackgroundColor1\', \'#FFFFFF\');\n\t\t\tviewer.setParameter(\'BackgroundColor2\', \'#383840\');\n\t\t\tviewer.setParameter(\'RenderMode\', "flat");\n\t\t}\n\t\tsetup_viewer()\n\n\t\treader.onload = (function(file) {\n\t\t\treturn function(e) {\n\t\t\t\ttheScene = new JSC3D.Scene\n\t\t    \tstl_loader = new JSC3D.StlLoader()\n\t\t    \tstl_loader.parseStl(theScene, e.target.result)\n\t\t      \t//viewer.init()\n\t\t      \tviewer.replaceScene(theScene)\n\t\t      \tviewer.update()\n\t\t      \tconsole.log("file reader onload")\n\t\t\t}\n\t\t})(f)\n\n\t\tif (ext.toLowerCase() != "stl") {\n\t\t\talert("That doesn\'t appear to be an STL file.");\n\t\t} else {\n\t\t\treader.readAsBinaryString(f)\n\t\t}\n\t}\n}\n \n \n Html\xa0\xa0 Source code \n <html>\n   <head>\n      <meta http-equiv="content-type" content="text/html;charset=utf-8">\n      <title>CMSimfly</title>\n      <link rel="stylesheet" type="text/css" href="/static/cmsimply.css">\n   </head>\n   <body>\n      <div class=\'container\'>\n      <nav>\n         <ul id=\'css3menu1\' class=\'topmenu\'>\n            <li><a href=\'/get_page/簡介\'>簡介</a>\n            <li><a href=\'/get_page/目錄結構\'>目錄結構</a>\n            <li>\n               <a href=\'/get_page/頁面編輯\'>頁面編輯</a>\n               <ul>\n                  <li>\n                     <a href=\'/get_page/插入程式碼\'>插入程式碼</a>\n                     <ul>\n                        <li><a href=\'/get_page/Java 程式碼\'>Java 程式碼</a>\n                        <li><a href=\'/get_page/Python 程式碼\'>Python 程式碼</a>\n                        <li><a href=\'/get_page/C或C++程式碼\'>C或C++程式碼</a>\n                        <li><a href=\'/get_page/Lua 程式碼\'>Lua 程式碼</a>\n                        <li><a href=\'/get_page/Javascript 程式碼\'>Javascript 程式碼</a>\n                        <li><a href=\'/get_page/Html 原始碼\'>Html 原始碼</a></li>\n                        </li>\n                     </ul>\n               </ul>\n            <li><a href=\'/get_page/網際簡報\'>網際簡報</a>\n            <li><a href=\'/get_page/網誌編輯\'>網誌編輯</a>\n            <li><a href=\'/get_page/已知錯誤\'>已知錯誤</a></li>\n         </ul>\n      </nav>\n      <section>\n         <form method=\'post\' action=\'/ssavePage\'>\n         <textarea class=\'simply-editor\' name=\'page_content\' cols=\'50\' rows=\'15\'><h3>Html 原始碼</h3></textarea>\n         <input type=\'hidden\' name=\'page_order\' value=\'9\'>\n         <input type=\'submit\' value=\'save\'>\n         <input type=button onClick="location.href=\'/get_page/Html 原始碼\'" value=\'viewpage\'>\n         </form>\n      </section>\n   </body>\n</html>\nCOPY TO CLIPBOARD\t \n \n', 'tags': '', 'url': 'Javascript\xa0 cold.html'}, {'title': 'Internet newsletter', 'text': 'CMSimfly 中採用  Reveal.js  作為網際簡報, 其中的維護檔案位於 config/reveal.js, 而對應的簡報檔案則位於 reveal 目錄中. \n', 'tags': '', 'url': 'Internet newsletter.html'}, {'title': 'Blog edit', 'text': 'CMSimfly 採用  Pelican blog  系統, 編輯檔案位於 config/pelican.leo, 對應的 \n \xa0Markdown 原始檔案位於 markdown 目錄中, 而經 Pelican 轉換出的網誌超文件檔案則位於 blog 目錄中. \n 其餘在網誌文章中所需要的 Javascript 或 Brython 程式檔案, 則與 CMSimfly 及 Reveal.js 共用, 位於 static 目錄下. \n 上傳檔案與圖檔的引用則與 CMSimfly 架構相同. \n 第二位搶這裡也是不遺餘力 \n \n 就是這樣編輯的 \n 接下來修改這裡 \n \n', 'tags': '', 'url': 'Blog edit.html'}, {'title': 'Q & A', 'text': 'Q1 全部頁面會因無法正確解讀而誤刪 \n 在特定情況下, 系統會誤刪 config/content.htm 檔案, 目前在單頁或全部頁面編輯存檔之前, 或將上一版本的 content.htm 存入 content_back.htm, 若 content.htm 內容被程式誤刪, 可以利用備份檔案複製回原始內容後, 再進行後續處理. \n Q2 頁面標題不支援特殊符號 \n 各頁面標題目前不支援特殊符號, 例如: "/", "?" 等, 若已經發生程式無法解讀頁面的情況, 只能從編輯 config/content.htm 下手, 若系統位於遠端, 則後續必須要再設法提供一個額外的編輯 config/content.htm 檔案的網際連結功能. \n Q3 Video 引用不支援內部引用 \n tinymce 中插入 video 的小視窗, 要移除引用的圖像與連結, 因為一般建議不要在內容中存入 .mp4 的影片資料, 而只接受引入影片 URL 連結.. \n', 'tags': '', 'url': 'Q & A.html'}, {'title': 'personal video', 'text': '', 'tags': '', 'url': 'personal video.html'}]};