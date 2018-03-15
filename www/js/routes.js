angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('welcomeToSTL', {
    url: '/page97',
    templateUrl: 'templates/welcomeToSTL.html',
    controller: 'welcomeToSTLCtrl'
  })

  .state('login', {
    url: '/page98',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('menu.startsida', {
    url: '/page65',
    views: {
      'side-menu21': {
        templateUrl: 'templates/startsida.html',
        controller: 'startsidaCtrl'
      }
    }
  })

  .state('menu.vIktigaDatum', {
    url: '/page8',
    views: {
      'side-menu21': {
        templateUrl: 'templates/vIktigaDatum.html',
        controller: 'vIktigaDatumCtrl'
      }
    }
  })

  .state('menu.minProfil', {
    url: '/page2',
    views: {
      'side-menu21': {
        templateUrl: 'templates/minProfil.html',
        controller: 'minProfilCtrl'
      }
    }
  })

  .state('menu.uppgifter', {
    url: '/page3',
    views: {
      'side-menu21': {
        templateUrl: 'templates/uppgifter.html',
        controller: 'uppgifterCtrl'
      }
    }
  })

  .state('menu.kurser', {
    url: '/page67',
    views: {
      'side-menu21': {
        templateUrl: 'templates/kurser.html',
        controller: 'kurserCtrl'
      }
    }
  })

  .state('menu.pGEndeKurs', {
    url: '/page71',
    views: {
      'side-menu21': {
        templateUrl: 'templates/pGEndeKurs.html',
        controller: 'pGEndeKursCtrl'
      }
    }
  })

  .state('menu.kursbeskrivningSTL', {
    url: '/page69',
    views: {
      'side-menu21': {
        templateUrl: 'templates/kursbeskrivningSTL.html',
        controller: 'kursbeskrivningSTLCtrl'
      }
    }
  })

  .state('menu.genomfRdKurs1', {
    url: '/page74',
    views: {
      'side-menu21': {
        templateUrl: 'templates/genomfRdKurs1.html',
        controller: 'genomfRdKurs1Ctrl'
      }
    }
  })

  .state('menu.minaResultat', {
    url: '/page6',
    views: {
      'side-menu21': {
        templateUrl: 'templates/minaResultat.html',
        controller: 'minaResultatCtrl'
      }
    }
  })

  .state('menu.Terkoppling', {
    url: '/page4',
    views: {
      'side-menu21': {
        templateUrl: 'templates/Terkoppling.html',
        controller: 'TerkopplingCtrl'
      }
    }
  })

  .state('exempelTerkoppling', {
    url: '/page55',
    templateUrl: 'templates/exempelTerkoppling.html',
    controller: 'exempelTerkopplingCtrl'
  })

  .state('menu.Terkoppling2', {
    url: '/page27',
    views: {
      'side-menu21': {
        templateUrl: 'templates/Terkoppling2.html',
        controller: 'Terkoppling2Ctrl'
      }
    }
  })

  .state('menu.geTerkopplingU4', {
    url: '/page58',
    views: {
      'side-menu21': {
        templateUrl: 'templates/geTerkopplingU4.html',
        controller: 'geTerkopplingU4Ctrl'
      }
    }
  })

  .state('TerkopplingU2', {
    url: '/page63',
    templateUrl: 'templates/TerkopplingU2.html',
    controller: 'TerkopplingU2Ctrl'
  })

  .state('menu.meddelanden', {
    url: '/page61',
    views: {
      'side-menu21': {
        templateUrl: 'templates/meddelanden.html',
        controller: 'meddelandenCtrl'
      }
    }
  })

  .state('meddelande2', {
    url: '/page66',
    templateUrl: 'templates/meddelande2.html',
    controller: 'meddelande2Ctrl'
  })

  .state('TerkopplingTillDig', {
    url: '/page60',
    templateUrl: 'templates/TerkopplingTillDig.html',
    controller: 'TerkopplingTillDigCtrl'
  })

  .state('menu.Terkoppling1U1', {
    url: '/page50',
    views: {
      'side-menu21': {
        templateUrl: 'templates/Terkoppling1U1.html',
        controller: 'Terkoppling1U1Ctrl'
      }
    }
  })

  .state('menu.Terkoppling1U2', {
    url: '/page105',
    views: {
      'side-menu21': {
        templateUrl: 'templates/Terkoppling1U2.html',
        controller: 'Terkoppling1U2Ctrl'
      }
    }
  })

  .state('menu.Terkoppling1U3', {
    url: '/page107',
    views: {
      'side-menu21': {
        templateUrl: 'templates/Terkoppling1U3.html',
        controller: 'Terkoppling1U3Ctrl'
      }
    }
  })

  .state('skickadTerkoppling1U1', {
    url: '/page87',
    templateUrl: 'templates/skickadTerkoppling1U1.html',
    controller: 'skickadTerkoppling1U1Ctrl'
  })

  .state('visaTerkoppling', {
    url: '/page88',
    templateUrl: 'templates/visaTerkoppling.html',
    controller: 'visaTerkopplingCtrl'
  })

  .state('mottagenTerkoppling', {
    url: '/page79',
    templateUrl: 'templates/mottagenTerkoppling.html',
    controller: 'mottagenTerkopplingCtrl'
  })

  .state('menu.bedMTerkoppling', {
    url: '/page25',
    views: {
      'side-menu21': {
        templateUrl: 'templates/bedMTerkoppling.html',
        controller: 'bedMTerkopplingCtrl'
      }
    }
  })

  .state('menu.bedMTerkoppling1U1', {
    url: '/page28',
    views: {
      'side-menu21': {
        templateUrl: 'templates/bedMTerkoppling1U1.html',
        controller: 'bedMTerkoppling1U1Ctrl'
      }
    }
  })

  .state('bedMTerkoppling2', {
    url: '/page99',
    templateUrl: 'templates/bedMTerkoppling2.html',
    controller: 'bedMTerkoppling2Ctrl'
  })

  .state('menu.bedMning', {
    url: '/page80',
    views: {
      'side-menu21': {
        templateUrl: 'templates/bedMning.html',
        controller: 'bedMningCtrl'
      }
    }
  })

  .state('bedMning2', {
    url: '/page91',
    templateUrl: 'templates/bedMning2.html',
    controller: 'bedMning2Ctrl'
  })

  .state('dinBedMning', {
    url: '/page92',
    templateUrl: 'templates/dinBedMning.html',
    controller: 'dinBedMningCtrl'
  })

  .state('bedMTerkoppling1', {
    url: '/page53',
    templateUrl: 'templates/bedMTerkoppling1.html',
    controller: 'bedMTerkoppling1Ctrl'
  })

  .state('menu', {
    url: '/menu',
    templateUrl: 'templates/menu.html',
    controller: 'menuCtrl'
  })

  .state('menu.avslutadeUppgifter', {
    url: '/page81',
    views: {
      'side-menu21': {
        templateUrl: 'templates/avslutadeUppgifter.html',
        controller: 'avslutadeUppgifterCtrl'
      }
    }
  })

  .state('kommandeUppgifter', {
    url: '/page12',
    templateUrl: 'templates/kommandeUppgifter.html',
    controller: 'kommandeUppgifterCtrl'
  })

  .state('menu.pGEnde', {
    url: '/page14',
    views: {
      'side-menu21': {
        templateUrl: 'templates/pGEnde.html',
        controller: 'pGEndeCtrl'
      }
    }
  })

  .state('menu.meddelanden2', {
    url: '/page75',
    views: {
      'side-menu21': {
        templateUrl: 'templates/meddelanden2.html',
        controller: 'meddelanden2Ctrl'
      }
    }
  })

  .state('menu.fRdigUppgift', {
    url: '/page103',
    views: {
      'side-menu21': {
        templateUrl: 'templates/fRdigUppgift.html',
        controller: 'fRdigUppgiftCtrl'
      }
    }
  })

  .state('menu.fRdigUppgift2', {
    url: '/page104',
    views: {
      'side-menu21': {
        templateUrl: 'templates/fRdigUppgift2.html',
        controller: 'fRdigUppgift2Ctrl'
      }
    }
  })

  .state('menu.fRdigUppgift3', {
    url: '/page106',
    views: {
      'side-menu21': {
        templateUrl: 'templates/fRdigUppgift3.html',
        controller: 'fRdigUppgift3Ctrl'
      }
    }
  })

  .state('menu.skickaMeddelande', {
    url: '/page62',
    views: {
      'side-menu21': {
        templateUrl: 'templates/skickaMeddelande.html',
        controller: 'skickaMeddelandeCtrl'
      }
    }
  })

  .state('visaUppgift', {
    url: '/page64',
    templateUrl: 'templates/visaUppgift.html',
    controller: 'visaUppgiftCtrl'
  })

  .state('menu.uppgift4', {
    url: '/page16',
    views: {
      'side-menu21': {
        templateUrl: 'templates/uppgift4.html',
        controller: 'uppgift4Ctrl'
      }
    }
  })

  .state('menu.rapporteraUppgift', {
    url: '/page17',
    views: {
      'side-menu21': {
        templateUrl: 'templates/rapporteraUppgift.html',
        controller: 'rapporteraUppgiftCtrl'
      }
    }
  })

  .state('inskickadUppgift', {
    url: '/page100',
    templateUrl: 'templates/inskickadUppgift.html',
    controller: 'inskickadUppgiftCtrl'
  })

  .state('menu.materialTillUppgift', {
    url: '/page18',
    views: {
      'side-menu21': {
        templateUrl: 'templates/materialTillUppgift.html',
        controller: 'materialTillUppgiftCtrl'
      }
    }
  })

  .state('menu.meddelanden3', {
    url: '/page20',
    views: {
      'side-menu21': {
        templateUrl: 'templates/meddelanden3.html',
        controller: 'meddelanden3Ctrl'
      }
    }
  })

  .state('menu.grupper', {
    url: '/page21',
    views: {
      'side-menu21': {
        templateUrl: 'templates/grupper.html',
        controller: 'grupperCtrl'
      }
    }
  })

  .state('menu.sjLvbedMningHalvtid', {
    url: '/page19',
    views: {
      'side-menu21': {
        templateUrl: 'templates/sjLvbedMningHalvtid.html',
        controller: 'sjLvbedMningHalvtidCtrl'
      }
    }
  })

  .state('menu.redigeraBedMning', {
    url: '/editmittermass',
    views: {
      'side-menu21': {
        templateUrl: 'templates/redigeraBedMning.html',
        controller: 'redigeraBedMningCtrl'
      }
    }
  })

  .state('menu.hurGRa', {
    url: '/page59',
    views: {
      'side-menu21': {
        templateUrl: 'templates/hurGRa.html',
        controller: 'hurGRaCtrl'
      }
    }
  })

  .state('menu.sjLvbedMning', {
    url: '/page40',
    views: {
      'side-menu21': {
        templateUrl: 'templates/sjLvbedMning.html',
        controller: 'sjLvbedMningCtrl'
      }
    }
  })

  .state('menu.sjLvbedMning2', {
    url: '/page41',
    views: {
      'side-menu21': {
        templateUrl: 'templates/sjLvbedMning2.html',
        controller: 'sjLvbedMning2Ctrl'
      }
    }
  })

  .state('menu.sjLvbedMningHalvtid2', {
    url: '/page22',
    views: {
      'side-menu21': {
        templateUrl: 'templates/sjLvbedMningHalvtid2.html',
        controller: 'sjLvbedMningHalvtid2Ctrl'
      }
    }
  })

  .state('menu.sjLvbedMningHalvtid3', {
    url: '/page32',
    views: {
      'side-menu21': {
        templateUrl: 'templates/sjLvbedMningHalvtid3.html',
        controller: 'sjLvbedMningHalvtid3Ctrl'
      }
    }
  })

  .state('menu.sjLvbedMningHalvtid4', {
    url: '/page33',
    views: {
      'side-menu21': {
        templateUrl: 'templates/sjLvbedMningHalvtid4.html',
        controller: 'sjLvbedMningHalvtid4Ctrl'
      }
    }
  })

  .state('menu.sjLvbedMningHalvtid5', {
    url: '/page34',
    views: {
      'side-menu21': {
        templateUrl: 'templates/sjLvbedMningHalvtid5.html',
        controller: 'sjLvbedMningHalvtid5Ctrl'
      }
    }
  })

  .state('menu.sjLvbedMningHalvtid6', {
    url: '/page35',
    views: {
      'side-menu21': {
        templateUrl: 'templates/sjLvbedMningHalvtid6.html',
        controller: 'sjLvbedMningHalvtid6Ctrl'
      }
    }
  })

  .state('menu.sjLvbedMningHalvtid7', {
    url: '/page36',
    views: {
      'side-menu21': {
        templateUrl: 'templates/sjLvbedMningHalvtid7.html',
        controller: 'sjLvbedMningHalvtid7Ctrl'
      }
    }
  })

  .state('menu.sjLvbedMningHalvtid8', {
    url: '/page37',
    views: {
      'side-menu21': {
        templateUrl: 'templates/sjLvbedMningHalvtid8.html',
        controller: 'sjLvbedMningHalvtid8Ctrl'
      }
    }
  })

  .state('menu.sjLvbedMningHalvtid9', {
    url: '/page38',
    views: {
      'side-menu21': {
        templateUrl: 'templates/sjLvbedMningHalvtid9.html',
        controller: 'sjLvbedMningHalvtid9Ctrl'
      }
    }
  })

  .state('menu.sjLvbedMningHalvtid10', {
    url: '/page39',
    views: {
      'side-menu21': {
        templateUrl: 'templates/sjLvbedMningHalvtid10.html',
        controller: 'sjLvbedMningHalvtid10Ctrl'
      }
    }
  })

  .state('menu.sjLvbedMningHalvtid11', {
    url: '/page42',
    views: {
      'side-menu21': {
        templateUrl: 'templates/sjLvbedMningHalvtid11.html',
        controller: 'sjLvbedMningHalvtid11Ctrl'
      }
    }
  })

  .state('menu.sjLvbedMningHalvtid12', {
    url: '/page43',
    views: {
      'side-menu21': {
        templateUrl: 'templates/sjLvbedMningHalvtid12.html',
        controller: 'sjLvbedMningHalvtid12Ctrl'
      }
    }
  })

  .state('menu.sjLvbedMningHalvtid13', {
    url: '/page44',
    views: {
      'side-menu21': {
        templateUrl: 'templates/sjLvbedMningHalvtid13.html',
        controller: 'sjLvbedMningHalvtid13Ctrl'
      }
    }
  })

  .state('menu.sjLvbedMningHalvtid14', {
    url: '/page45',
    views: {
      'side-menu21': {
        templateUrl: 'templates/sjLvbedMningHalvtid14.html',
        controller: 'sjLvbedMningHalvtid14Ctrl'
      }
    }
  })

  .state('menu.sjLvbedMningHalvtid15', {
    url: '/page46',
    views: {
      'side-menu21': {
        templateUrl: 'templates/sjLvbedMningHalvtid15.html',
        controller: 'sjLvbedMningHalvtid15Ctrl'
      }
    }
  })

  .state('menu.sjLvbedMningHalvtid16', {
    url: '/page47',
    views: {
      'side-menu21': {
        templateUrl: 'templates/sjLvbedMningHalvtid16.html',
        controller: 'sjLvbedMningHalvtid16Ctrl'
      }
    }
  })

  .state('menu.sjLvbedMningar', {
    url: '/page30',
    views: {
      'side-menu21': {
        templateUrl: 'templates/sjLvbedMningar.html',
        controller: 'sjLvbedMningarCtrl'
      }
    }
  })

  .state('menu.sjLvbedMningKursstart', {
    url: '/page31',
    views: {
      'side-menu21': {
        templateUrl: 'templates/sjLvbedMningKursstart.html',
        controller: 'sjLvbedMningKursstartCtrl'
      }
    }
  })

  .state('menu.klart', {
    url: '/page48',
    views: {
      'side-menu21': {
        templateUrl: 'templates/klart.html',
        controller: 'klartCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/page97')


});