const exampleData = [
  [
    1510073100000,
    7000.3
  ],
  [
    1510073040000,
    7004.1
  ],
  [
    1510072980000,
    7003.3
  ],
  [
    1510072920000,
    7010
  ],
  [
    1510072860000,
    7004.4
  ],
  [
    1510072800000,
    7003
  ],
  [
    1510072740000,
    7009.1
  ],
  [
    1510072680000,
    7000
  ],
  [
    1510072620000,
    6990.9
  ],
  [
    1510072560000,
    6991.1
  ],
  [
    1510072500000,
    6981.3
  ],
  [
    1510072440000,
    6980.2
  ],
  [
    1510072380000,
    6980.2
  ],
  [
    1510072320000,
    6981.6
  ],
  [
    1510072260000,
    6975.8
  ],
  [
    1510072200000,
    6985.1
  ],
  [
    1510072140000,
    6979.4
  ],
  [
    1510072080000,
    6976.7
  ],
  [
    1510072020000,
    6983.2
  ],
  [
    1510071960000,
    6990.1
  ],
  [
    1510071900000,
    6999.9
  ],
  [
    1510071840000,
    6998.5
  ],
  [
    1510071780000,
    6995.4
  ],
  [
    1510071720000,
    6994.9
  ],
  [
    1510071660000,
    6992
  ],
  [
    1510071600000,
    6987.9
  ],
  [
    1510071540000,
    6987.8
  ],
  [
    1510071480000,
    6986.6
  ],
  [
    1510071420000,
    6989.1
  ],
  [
    1510071360000,
    6987
  ],
  [
    1510071300000,
    6977.9
  ],
  [
    1510071240000,
    6983.5
  ],
  [
    1510071180000,
    6995.2
  ],
  [
    1510071120000,
    6999.9
  ],
  [
    1510071060000,
    6999.7
  ],
  [
    1510071000000,
    6985.4
  ],
  [
    1510070940000,
    6981.8
  ],
  [
    1510070880000,
    6990
  ],
  [
    1510070820000,
    6999.6
  ],
  [
    1510070760000,
    7023.9
  ],
  [
    1510070700000,
    7028
  ],
  [
    1510070640000,
    7032.1
  ],
  [
    1510070580000,
    7030.1
  ],
  [
    1510070520000,
    7038.9
  ],
  [
    1510070460000,
    7036.6
  ],
  [
    1510070400000,
    7030
  ],
  [
    1510070340000,
    7041.4
  ],
  [
    1510070280000,
    7031.1
  ],
  [
    1510070220000,
    7030.2
  ],
  [
    1510070160000,
    7030
  ],
  [
    1510070100000,
    7032.1
  ],
  [
    1510070040000,
    7031.2
  ],
  [
    1510069980000,
    7028.6
  ],
  [
    1510069920000,
    7024.2
  ],
  [
    1510069860000,
    7017.3
  ],
  [
    1510069800000,
    7015.7
  ],
  [
    1510069740000,
    7022.1
  ],
  [
    1510069680000,
    7019.9
  ],
  [
    1510069620000,
    7016.5
  ],
  [
    1510069560000,
    7017.5
  ],
  [
    1510069500000,
    7011
  ],
  [
    1510069440000,
    7011
  ],
  [
    1510069380000,
    6998.5
  ],
  [
    1510069320000,
    6997.2
  ],
  [
    1510069260000,
    6998.7
  ],
  [
    1510069200000,
    6998.5
  ],
  [
    1510069140000,
    6997.1
  ],
  [
    1510069080000,
    6994.9
  ],
  [
    1510069020000,
    6997.8
  ],
  [
    1510068960000,
    6998.7
  ],
  [
    1510068900000,
    6999.6
  ],
  [
    1510068840000,
    7006
  ],
  [
    1510068780000,
    7007.5
  ],
  [
    1510068720000,
    7007.7
  ],
  [
    1510068660000,
    7013.1
  ],
  [
    1510068600000,
    7013.7
  ],
  [
    1510068540000,
    7003.1
  ],
  [
    1510068480000,
    7005.7
  ],
  [
    1510068420000,
    7009.5
  ],
  [
    1510068360000,
    7006.6
  ],
  [
    1510068300000,
    7000
  ],
  [
    1510068240000,
    6994.9
  ],
  [
    1510068180000,
    6995.4
  ],
  [
    1510068120000,
    6996.9
  ],
  [
    1510068060000,
    7007.7
  ],
  [
    1510068000000,
    7010.1
  ],
  [
    1510067940000,
    7012
  ],
  [
    1510067880000,
    7012.1
  ],
  [
    1510067820000,
    7016.1
  ],
  [
    1510067760000,
    7016
  ],
  [
    1510067700000,
    7012.6
  ],
  [
    1510067640000,
    6997.3
  ],
  [
    1510067580000,
    6997.1
  ],
  [
    1510067520000,
    6995.2
  ],
  [
    1510067460000,
    6989.8
  ],
  [
    1510067400000,
    6986.9
  ],
  [
    1510067340000,
    6987.9
  ],
  [
    1510067280000,
    6973.9
  ],
  [
    1510067220000,
    6978.7
  ],
  [
    1510067160000,
    6986.1
  ],
  [
    1510067100000,
    6999
  ],
  [
    1510067040000,
    6987.4
  ],
  [
    1510066980000,
    6986.7
  ],
  [
    1510066920000,
    6999
  ],
  [
    1510066860000,
    7003
  ],
  [
    1510066800000,
    7000.2
  ],
  [
    1510066740000,
    6999.5
  ],
  [
    1510066680000,
    6983.7
  ],
  [
    1510066620000,
    6972
  ],
  [
    1510066560000,
    6964.4
  ],
  [
    1510066500000,
    6968
  ],
  [
    1510066440000,
    6969.5
  ],
  [
    1510066380000,
    6968.3
  ],
  [
    1510066320000,
    6973.2
  ],
  [
    1510066260000,
    6992.6
  ],
  [
    1510066200000,
    7007.4
  ],
  [
    1510066140000,
    7009.1
  ],
  [
    1510066080000,
    7021.5
  ],
  [
    1510066020000,
    7024
  ],
  [
    1510065960000,
    7026.2
  ],
  [
    1510065900000,
    7036.1
  ],
  [
    1510065840000,
    7030.3
  ],
  [
    1510065780000,
    7030.3
  ],
  [
    1510065720000,
    7026.4
  ],
  [
    1510065660000,
    7029.2
  ],
  [
    1510065600000,
    7035.7
  ],
  [
    1510065540000,
    7042
  ],
  [
    1510065480000,
    7060.1
  ],
  [
    1510065420000,
    7060
  ],
  [
    1510065360000,
    7067.5
  ],
  [
    1510065300000,
    7070.3
  ],
  [
    1510065240000,
    7070.6
  ],
  [
    1510065180000,
    7069.9
  ],
  [
    1510065120000,
    7065.3
  ],
  [
    1510065060000,
    7064
  ],
  [
    1510065000000,
    7062.9
  ],
  [
    1510064940000,
    7066
  ],
  [
    1510064880000,
    7044.9
  ],
  [
    1510064820000,
    7035
  ],
  [
    1510064760000,
    7034.5
  ],
  [
    1510064700000,
    7037.2
  ],
  [
    1510064640000,
    7032.4
  ],
  [
    1510064580000,
    7024.6
  ],
  [
    1510064520000,
    7036.9
  ],
  [
    1510064460000,
    7040
  ],
  [
    1510064400000,
    7039.9
  ],
  [
    1510064340000,
    7038.9
  ],
  [
    1510064280000,
    7035.9
  ],
  [
    1510064220000,
    7035.9
  ],
  [
    1510064160000,
    7035.9
  ],
  [
    1510064100000,
    7032
  ],
  [
    1510064040000,
    7023
  ],
  [
    1510063980000,
    7013.6
  ],
  [
    1510063920000,
    7013.2
  ],
  [
    1510063860000,
    7017.5
  ],
  [
    1510063800000,
    7022.5
  ],
  [
    1510063740000,
    6998
  ],
  [
    1510063680000,
    6972.2
  ],
  [
    1510063620000,
    6969.3
  ],
  [
    1510063560000,
    6974.5
  ],
  [
    1510063500000,
    6989
  ],
  [
    1510063440000,
    7000.4
  ],
  [
    1510063380000,
    7007
  ],
  [
    1510063320000,
    7017
  ],
  [
    1510063260000,
    7028
  ],
  [
    1510063200000,
    7032.6
  ],
  [
    1510063140000,
    7032.6
  ],
  [
    1510063080000,
    7033.1
  ],
  [
    1510063020000,
    7032.6
  ],
  [
    1510062960000,
    7028
  ],
  [
    1510062900000,
    7026.9
  ],
  [
    1510062840000,
    7020.2
  ],
  [
    1510062780000,
    7030.1
  ],
  [
    1510062720000,
    7037.2
  ],
  [
    1510062660000,
    7031.3
  ],
  [
    1510062600000,
    7026.8
  ],
  [
    1510062540000,
    7040.5
  ],
  [
    1510062480000,
    7040.1
  ],
  [
    1510062420000,
    7040
  ],
  [
    1510062360000,
    7035.4
  ],
  [
    1510062300000,
    7039
  ],
  [
    1510062240000,
    7034.6
  ],
  [
    1510062180000,
    7035.1
  ],
  [
    1510062120000,
    7017.8
  ],
  [
    1510062060000,
    7019.7
  ],
  [
    1510062000000,
    7008.9
  ],
  [
    1510061940000,
    7007.2
  ],
  [
    1510061880000,
    7006
  ],
  [
    1510061820000,
    7012.6
  ],
  [
    1510061760000,
    7015.2
  ],
  [
    1510061700000,
    7015
  ],
  [
    1510061640000,
    7009.9
  ],
  [
    1510061580000,
    7003.1
  ],
  [
    1510061520000,
    7018.9
  ],
  [
    1510061460000,
    7015.9
  ],
  [
    1510061400000,
    6991.4
  ],
  [
    1510061340000,
    7015.7
  ],
  [
    1510061280000,
    7015
  ],
  [
    1510061220000,
    7011.9
  ],
  [
    1510061160000,
    7028.9
  ],
  [
    1510061100000,
    7035.4
  ],
  [
    1510061040000,
    7027.8
  ],
  [
    1510060980000,
    7040.3
  ],
  [
    1510060920000,
    7048.7
  ],
  [
    1510060860000,
    7050.4
  ],
  [
    1510060800000,
    7053.3
  ],
  [
    1510060740000,
    7059.5
  ],
  [
    1510060680000,
    7065.8
  ],
  [
    1510060620000,
    7058
  ],
  [
    1510060560000,
    7061.5
  ],
  [
    1510060500000,
    7049.3
  ],
  [
    1510060440000,
    7050
  ],
  [
    1510060380000,
    7050.6
  ],
  [
    1510060320000,
    7090.5
  ],
  [
    1510060260000,
    7106.3
  ],
  [
    1510060200000,
    7075
  ],
  [
    1510060140000,
    7076.3
  ],
  [
    1510060080000,
    7086.9
  ],
  [
    1510060020000,
    7102.4
  ],
  [
    1510059960000,
    7101.8
  ],
  [
    1510059900000,
    7104.3
  ],
  [
    1510059840000,
    7127.2
  ],
  [
    1510059780000,
    7138.9
  ],
  [
    1510059720000,
    7162
  ],
  [
    1510059660000,
    7172.3
  ],
  [
    1510059600000,
    7172.3
  ],
  [
    1510059540000,
    7172.3
  ],
  [
    1510059480000,
    7175.3
  ],
  [
    1510059420000,
    7173.8
  ],
  [
    1510059360000,
    7173.6
  ],
  [
    1510059300000,
    7177.7
  ],
  [
    1510059240000,
    7169.2
  ],
  [
    1510059180000,
    7178
  ],
  [
    1510059120000,
    7169.5
  ],
  [
    1510059060000,
    7189
  ],
  [
    1510059000000,
    7191.1
  ],
  [
    1510058940000,
    7195.6
  ],
  [
    1510058880000,
    7199.5
  ],
  [
    1510058820000,
    7192.1
  ],
  [
    1510058760000,
    7202.6
  ]
]

export default exampleData
