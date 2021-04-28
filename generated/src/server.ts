import App from "./app";
import * as process from "process";

import * as bodyParser from "body-parser";
import loggerMiddleware from "./middleware/logger";

import * as dotenv from "dotenv";
import * as customenv from "custom-env";
import "reflect-metadata";
import { createConnection } from "typeorm";


import AccountinggroupsRest from './rest/AccountinggroupsRest'; 
import AccounttypesRest from './rest/AccounttypesRest'; 
import AddressesRest from './rest/AddressesRest'; 
import ApppermissionsRest from './rest/ApppermissionsRest'; 
import ApppermissionstopermissiontypesRest from './rest/ApppermissionstopermissiontypesRest'; 
import AppviewsRest from './rest/AppviewsRest'; 
import AuditsRest from './rest/AuditsRest'; 
import BankaccountsRest from './rest/BankaccountsRest'; 
import BanksRest from './rest/BanksRest'; 
import BiddingsRest from './rest/BiddingsRest'; 
import BiddingstosuppliersRest from './rest/BiddingstosuppliersRest'; 
import BiddingstosurveyresultsRest from './rest/BiddingstosurveyresultsRest'; 
import BusinesstypesRest from './rest/BusinesstypesRest'; 
import BuyerorganizationsRest from './rest/BuyerorganizationsRest'; 
import BuyordersRest from './rest/BuyordersRest'; 
import BuyordersportalRest from './rest/BuyordersportalRest'; 
import BuyordertypesRest from './rest/BuyordertypesRest'; 
import CategoriesRest from './rest/CategoriesRest'; 
import ChoicesRest from './rest/ChoicesRest'; 
import CitiesRest from './rest/CitiesRest'; 
import CompaniesRest from './rest/CompaniesRest'; 
import CompaniestocontactsRest from './rest/CompaniestocontactsRest'; 
import CompanynotificationemailsRest from './rest/CompanynotificationemailsRest'; 
import CompanytypesRest from './rest/CompanytypesRest'; 
import ComprobantesprocesadosRest from './rest/ComprobantesprocesadosRest'; 
import ComprobantessunatRest from './rest/ComprobantessunatRest'; 
import ConfirmationcontrolsRest from './rest/ConfirmationcontrolsRest'; 
import ContactoSociedadRest from './rest/ContactoSociedadRest'; 
import ContactrolesRest from './rest/ContactrolesRest'; 
import ContacttypesRest from './rest/ContacttypesRest'; 
import ContribuyentesunatRest from './rest/ContribuyentesunatRest'; 
import CostcenterRest from './rest/CostcenterRest'; 
import CostcentermaterialRest from './rest/CostcentermaterialRest'; 
import CotizacionmasterRest from './rest/CotizacionmasterRest'; 
import CotizacionmasterdetailRest from './rest/CotizacionmasterdetailRest'; 
import CountriesRest from './rest/CountriesRest'; 
import CurrenciesRest from './rest/CurrenciesRest'; 
import CustomerrorsRest from './rest/CustomerrorsRest'; 
import DeductionindicatorsRest from './rest/DeductionindicatorsRest'; 
import DeductiontypesRest from './rest/DeductiontypesRest'; 
import DeductiontypestosuppliersRest from './rest/DeductiontypestosuppliersRest'; 
import DistrictsRest from './rest/DistrictsRest'; 
import DocumentitempartialsRest from './rest/DocumentitempartialsRest'; 
import DocumentitemsRest from './rest/DocumentitemsRest'; 
import DocumentitemstatusesRest from './rest/DocumentitemstatusesRest'; 
import DocumentsRest from './rest/DocumentsRest'; 
import DocumentstatusesRest from './rest/DocumentstatusesRest'; 
import DocumenttypesRest from './rest/DocumenttypesRest'; 
import EconomicactivitiesRest from './rest/EconomicactivitiesRest'; 
import EmailqueueRest from './rest/EmailqueueRest'; 
import EmailtemplatesRest from './rest/EmailtemplatesRest'; 
import ErrorlogtempRest from './rest/ErrorlogtempRest'; 
import FileattachedRest from './rest/FileattachedRest'; 
import FileattachedlicitacionRest from './rest/FileattachedlicitacionRest'; 
import FormaltreatmentsRest from './rest/FormaltreatmentsRest'; 
import GrupoEconomicoRest from './rest/GrupoEconomicoRest'; 
import IdentitycardtypesRest from './rest/IdentitycardtypesRest'; 
import ImportRest from './rest/ImportRest'; 
import IncotermsRest from './rest/IncotermsRest'; 
import IntegrationlogRest from './rest/IntegrationlogRest'; 
import InvoicetypesRest from './rest/InvoicetypesRest'; 
import LanguagesRest from './rest/LanguagesRest'; 
import LicitacioneventsRest from './rest/LicitacioneventsRest'; 
import LicitacionmasterRest from './rest/LicitacionmasterRest'; 
import LicitacionmasterdetailRest from './rest/LicitacionmasterdetailRest'; 
import LicitacionmasterhistoryRest from './rest/LicitacionmasterhistoryRest'; 
import LicitacionmastersuppliersRest from './rest/LicitacionmastersuppliersRest'; 
import LicitacionwinnersRest from './rest/LicitacionwinnersRest'; 
import LinkedaccountsRest from './rest/LinkedaccountsRest'; 
import LinkmigocomprobanteRest from './rest/LinkmigocomprobanteRest'; 
import LogconsoleRest from './rest/LogconsoleRest'; 
import LogdberrorsRest from './rest/LogdberrorsRest'; 
import LogfacturasRest from './rest/LogfacturasRest'; 
import LogprocesosRest from './rest/LogprocesosRest'; 
import LogwebservicesRest from './rest/LogwebservicesRest'; 
import MasterclientsRest from './rest/MasterclientsRest'; 
import MasterusersRest from './rest/MasterusersRest'; 
import MeasuretypesRest from './rest/MeasuretypesRest'; 
import NumbersRest from './rest/NumbersRest'; 
import ParameterstableRest from './rest/ParameterstableRest'; 
import PaymentconditionsRest from './rest/PaymentconditionsRest'; 
import PaymenttypesRest from './rest/PaymenttypesRest'; 
import PermissiontypesRest from './rest/PermissiontypesRest'; 
import PersonsRest from './rest/PersonsRest'; 
import PlanSubscripcionRest from './rest/PlanSubscripcionRest'; 
import PlanSubscripcionGrupoEconomicoRest from './rest/PlanSubscripcionGrupoEconomicoRest'; 
import PortalConfigRest from './rest/PortalConfigRest'; 
import PrebillsRest from './rest/PrebillsRest'; 
import ProcesosIproviderRest from './rest/ProcesosIproviderRest'; 
import PublicidadinicioRest from './rest/PublicidadinicioRest'; 
import QuestionmultiplechoicesRest from './rest/QuestionmultiplechoicesRest'; 
import QuestionsRest from './rest/QuestionsRest'; 
import QuestiontypesRest from './rest/QuestiontypesRest'; 
import QuotationsRest from './rest/QuotationsRest'; 
import RegionsRest from './rest/RegionsRest'; 
import RolesRest from './rest/RolesRest'; 
import RolestopermissionsRest from './rest/RolestopermissionsRest'; 
import SectionsRest from './rest/SectionsRest'; 
import ServiceagenttypesRest from './rest/ServiceagenttypesRest'; 
import ServiceentrysheetsRest from './rest/ServiceentrysheetsRest'; 
import ServicetypesRest from './rest/ServicetypesRest'; 
import SociedadRest from './rest/SociedadRest'; 
import SpecialrolesRest from './rest/SpecialrolesRest'; 
import SpecialrolestoappviewsRest from './rest/SpecialrolestoappviewsRest'; 
import SuppliercategoriesRest from './rest/SuppliercategoriesRest'; 
import SupplierconfidentialityRest from './rest/SupplierconfidentialityRest'; 
import SuppliernationaltypesRest from './rest/SuppliernationaltypesRest'; 
import SuppliersRest from './rest/SuppliersRest'; 
import SuppliersauditRest from './rest/SuppliersauditRest'; 
import SupplierservicesRest from './rest/SupplierservicesRest'; 
import SupplierssocietyRest from './rest/SupplierssocietyRest'; 
import SuppliersspecialRest from './rest/SuppliersspecialRest'; 
import SupplierstatusesRest from './rest/SupplierstatusesRest'; 
import SupplierstopaymenttypesRest from './rest/SupplierstopaymenttypesRest'; 
import SuppliertypesRest from './rest/SuppliertypesRest'; 
import SurveyresultRest from './rest/SurveyresultRest'; 
import SurveysRest from './rest/SurveysRest'; 
import SurveytemplatesRest from './rest/SurveytemplatesRest'; 
import SysdiagramsRest from './rest/SysdiagramsRest'; 
import TaxnumbertypesRest from './rest/TaxnumbertypesRest'; 
import TaxtypesRest from './rest/TaxtypesRest'; 
import TempnifRest from './rest/TempnifRest'; 
import TestRest from './rest/TestRest'; 
import TestaccountsRest from './rest/TestaccountsRest'; 
import TransporttypesRest from './rest/TransporttypesRest'; 
import TreasurygroupsRest from './rest/TreasurygroupsRest'; 
import TypeofquestionsRest from './rest/TypeofquestionsRest'; 
import TypeofsupplierRest from './rest/TypeofsupplierRest'; 
import TypeofsurveyRest from './rest/TypeofsurveyRest'; 
import UnitsRest from './rest/UnitsRest'; 
import UploadresponseRest from './rest/UploadresponseRest'; 
import UsersRest from './rest/UsersRest'; 
import UserstorolesRest from './rest/UserstorolesRest'; 
import VehiclesRest from './rest/VehiclesRest'; 
import ViewtypesRest from './rest/ViewtypesRest'; 
import VolumetypesRest from './rest/VolumetypesRest'; 
import WarehousesRest from './rest/WarehousesRest'; 
import WaybillsRest from './rest/WaybillsRest'; 
import WaybilltypesRest from './rest/WaybilltypesRest'; 
import WebhooksRest from './rest/WebhooksRest'; 


dotenv.config();
const ENV = process.env.profile;
customenv.env(ENV);
console.log("/**************************/");
console.log(`/DATA BASE CONFIG - ${ENV.toUpperCase()}/`);

var flagBuild: boolean = __dirname.includes("src");
var stringEntities = flagBuild ? "src/entity/**/*.ts" : "dist/entity/**/*.js";
var databaseconfig: any = {
  type: process.env.CONNTYPE,
  host: process.env.CONNHOST,
  schema: process.env.CONNSHEMA,
  synchronize: process.env.CONNSYNC === "true",
  port: parseInt(process.env.CONNPORT),
  username: process.env.CONNUSER,
  password: process.env.CONNPW,
  database: process.env.CONNDB,
  encrypt: true,
  connectTimeoutMS: 100000,
  entities: [stringEntities],
};

console.log(databaseconfig);
console.log("/**************************/");
createConnection(databaseconfig)
  .then(async (connection) => {
    console.log("/CONNECTION SUCCESS/");
    const app = new App({
      port: parseInt(process.env.PORT) || 5000,
      controllers: [
          new AccountinggroupsRest(), 
new AccounttypesRest(), 
new AddressesRest(), 
new ApppermissionsRest(), 
new ApppermissionstopermissiontypesRest(), 
new AppviewsRest(), 
new AuditsRest(), 
new BankaccountsRest(), 
new BanksRest(), 
new BiddingsRest(), 
new BiddingstosuppliersRest(), 
new BiddingstosurveyresultsRest(), 
new BusinesstypesRest(), 
new BuyerorganizationsRest(), 
new BuyordersRest(), 
new BuyordersportalRest(), 
new BuyordertypesRest(), 
new CategoriesRest(), 
new ChoicesRest(), 
new CitiesRest(), 
new CompaniesRest(), 
new CompaniestocontactsRest(), 
new CompanynotificationemailsRest(), 
new CompanytypesRest(), 
new ComprobantesprocesadosRest(), 
new ComprobantessunatRest(), 
new ConfirmationcontrolsRest(), 
new ContactoSociedadRest(), 
new ContactrolesRest(), 
new ContacttypesRest(), 
new ContribuyentesunatRest(), 
new CostcenterRest(), 
new CostcentermaterialRest(), 
new CotizacionmasterRest(), 
new CotizacionmasterdetailRest(), 
new CountriesRest(), 
new CurrenciesRest(), 
new CustomerrorsRest(), 
new DeductionindicatorsRest(), 
new DeductiontypesRest(), 
new DeductiontypestosuppliersRest(), 
new DistrictsRest(), 
new DocumentitempartialsRest(), 
new DocumentitemsRest(), 
new DocumentitemstatusesRest(), 
new DocumentsRest(), 
new DocumentstatusesRest(), 
new DocumenttypesRest(), 
new EconomicactivitiesRest(), 
new EmailqueueRest(), 
new EmailtemplatesRest(), 
new ErrorlogtempRest(), 
new FileattachedRest(), 
new FileattachedlicitacionRest(), 
new FormaltreatmentsRest(), 
new GrupoEconomicoRest(), 
new IdentitycardtypesRest(), 
new ImportRest(), 
new IncotermsRest(), 
new IntegrationlogRest(), 
new InvoicetypesRest(), 
new LanguagesRest(), 
new LicitacioneventsRest(), 
new LicitacionmasterRest(), 
new LicitacionmasterdetailRest(), 
new LicitacionmasterhistoryRest(), 
new LicitacionmastersuppliersRest(), 
new LicitacionwinnersRest(), 
new LinkedaccountsRest(), 
new LinkmigocomprobanteRest(), 
new LogconsoleRest(), 
new LogdberrorsRest(), 
new LogfacturasRest(), 
new LogprocesosRest(), 
new LogwebservicesRest(), 
new MasterclientsRest(), 
new MasterusersRest(), 
new MeasuretypesRest(), 
new NumbersRest(), 
new ParameterstableRest(), 
new PaymentconditionsRest(), 
new PaymenttypesRest(), 
new PermissiontypesRest(), 
new PersonsRest(), 
new PlanSubscripcionRest(), 
new PlanSubscripcionGrupoEconomicoRest(), 
new PortalConfigRest(), 
new PrebillsRest(), 
new ProcesosIproviderRest(), 
new PublicidadinicioRest(), 
new QuestionmultiplechoicesRest(), 
new QuestionsRest(), 
new QuestiontypesRest(), 
new QuotationsRest(), 
new RegionsRest(), 
new RolesRest(), 
new RolestopermissionsRest(), 
new SectionsRest(), 
new ServiceagenttypesRest(), 
new ServiceentrysheetsRest(), 
new ServicetypesRest(), 
new SociedadRest(), 
new SpecialrolesRest(), 
new SpecialrolestoappviewsRest(), 
new SuppliercategoriesRest(), 
new SupplierconfidentialityRest(), 
new SuppliernationaltypesRest(), 
new SuppliersRest(), 
new SuppliersauditRest(), 
new SupplierservicesRest(), 
new SupplierssocietyRest(), 
new SuppliersspecialRest(), 
new SupplierstatusesRest(), 
new SupplierstopaymenttypesRest(), 
new SuppliertypesRest(), 
new SurveyresultRest(), 
new SurveysRest(), 
new SurveytemplatesRest(), 
new SysdiagramsRest(), 
new TaxnumbertypesRest(), 
new TaxtypesRest(), 
new TempnifRest(), 
new TestRest(), 
new TestaccountsRest(), 
new TransporttypesRest(), 
new TreasurygroupsRest(), 
new TypeofquestionsRest(), 
new TypeofsupplierRest(), 
new TypeofsurveyRest(), 
new UnitsRest(), 
new UploadresponseRest(), 
new UsersRest(), 
new UserstorolesRest(), 
new VehiclesRest(), 
new ViewtypesRest(), 
new VolumetypesRest(), 
new WarehousesRest(), 
new WaybillsRest(), 
new WaybilltypesRest(), 
new WebhooksRest(), 

      ],
      middleWares: [
        bodyParser.json(),
        bodyParser.urlencoded({ extended: true }),
        loggerMiddleware,
      ],
      jobs: [],
    });
    app.listen();
    console.log("/**************************/");
  })
  .catch((error) => {
    console.log("/**************************/");
    console.log("/CONNECTION ERROR/");
    console.log("/--------INFO--------/");
    console.log(error);
    console.log("/**************************/");
  });
