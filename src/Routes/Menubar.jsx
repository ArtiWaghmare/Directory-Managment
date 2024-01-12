import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';

import Navbar from '../components/Layout/Navbar';
import Sidebar from '../components/Layout/Sidebar';
import LoginForm from '../components/Auth/LoginForm';
import Role from '../pages/ManageProfile/Role';
import "./Menubar.css"
import BloodGroup from '../pages/bloodGroup/BloodGroup';
import AddRoleForm from '../pages/ManageProfile/AddRoleForm';
import MobileApp from '../pages/rolepermission/MobileApp';
import Reporting from '../pages/reporting/Reporting';
import AddReporting from '../pages/reporting/AddReporting';
import EditReporting from '../pages/reporting/EditReporting';
import Resion from '../pages/manageAttributes/Resion';
import AddResion from '../pages/manageAttributes/AddResion';
import EditResion from '../pages/manageAttributes/EditResion';

import EditDistrict from '../pages/district/EditDistrict';
import AddDistrict from '../pages/district/AddDistrict';
import State from '../pages/states/State';
import City from '../pages/city/City';
import District from '../pages/district/DistrictDash';
import DistrictDash from '../pages/district/DistrictDash';
import AddState from '../pages/states/AddState';
import EditState from '../pages/states/EditState';
import AddCity from '../pages/city/AddCity';
import EditCity from '../pages/city/EditCity';
import Territory from '../pages/manageTerretory/Territory';
import AddTerritory from '../pages/manageTerretory/AddTerritory';
import EditTerritory from '../pages/manageTerretory/EditTerritory';
import AddBloodGroup from '../pages/bloodGroup/AddBloodGroup';
import EditBloodGroup from '../pages/bloodGroup/EditBloodGroup';
import DealerType from '../pages/manageDealer/DealerType';
import AddDealer from '../pages/manageDealer/AddDealer';
import EditDealer from '../pages/manageDealer/EditDealer';
import WeekClose from '../pages/manageDealer/WeekClose';
import AddWeekClose from '../pages/manageDealer/AddWeek';
import EditWeekClose from '../pages/manageDealer/EditWeek';
import Gender from '../pages/manageGender/Gender';
import AddGender from '../pages/manageGender/AddGender';
import EditGender from '../pages/manageGender/EditGender';
import Vehicle from '../pages/manageVehicle/Vehicle';
import AddVehicle from '../pages/manageVehicle/AddVehicle';
import EditVehicle from '../pages/manageVehicle/EditVehicle';
import GsmPage from '../pages/manageGsm/GsmPage';
import AddGsm from '../pages/manageGsm/AddGsm';
import EditGsm from '../pages/manageGsm/EditGsm';
import BrustFactor from '../pages/manageBrustFactor/BrustFactor';
import AddFactor from '../pages/manageBrustFactor/AddFactor';
import EditFactor from '../pages/manageBrustFactor/EditFactor';
import HsnType from '../pages/manage hsn/HsnType';
import AddHsn from '../pages/manage hsn/AddHsn';
import EditHsn from '../pages/manage hsn/EditHsn';
import SaleOrder from '../pages/manageSaleOrder/SaleOrder';
import AddSale from '../pages/manageSaleOrder/AddSale';
import EditSale from '../pages/manageSaleOrder/EditSale';
import TaxType from '../pages/manageTaxType/TaxType';
import EditRoleForm from '../pages/ManageProfile/EditRoleForm';
import Website from '../pages/rolepermission/Website';
import Dashboard from '../pages/dash/Dashboard';
import EmployeeDetails from '../pages/employees/EmployeeDetails';
import AddEmployee from '../pages/employees/AddEmployee';
import EditEmployee from '../pages/employees/EditEmployees';
import ViewEmployee from '../pages/employees/ViewsEmployees';
import ManageAttendace from '../pages/manageAttedance/ManageAttendace';
import Permission from '../pages/rolepermission/Permission';
import Attencance from '../pages/manageAttedanc/Attencance';
// import Profile from '../pages/Profile/Profile';

function Menubar() {
  return (
    <Router>

      <Routes>
   
        <Route path="/addemployee" element={<AddEmployee />} />
        <Route path="/editemployee" element={<EditEmployee />} />
        <Route path="/viewemployee" element={<ViewEmployee />} />
        <Route path="/addrole" element={<AddRoleForm />} />
        <Route path="/editrole" element={< EditRoleForm />} />
        <Route path="/add-reporting" element={<AddReporting />} />
        <Route path="/edit-reporting" element={<EditReporting />} />
        <Route path="/edit-district" element={<EditDistrict />} />
        <Route path="/add-district" element={<AddDistrict />} />
        <Route path="/add-state" element={<AddState />} />
        <Route path="/edit-state" element={<EditState />} />
        <Route path="/add-city" element={<AddCity />} />
        <Route path="/edit-city" element={<EditCity />} />
        <Route path="/add-blood-group" element={<AddBloodGroup />} />
        <Route path="/edit-blood-group" element={<EditBloodGroup />} />
        <Route path="/addresion" element={<AddResion />} />
        <Route path="/editresion" element={<EditResion />} />
        <Route path="/add-dealer-type" element={<AddDealer />} />
        <Route path="/edit-dealer-type" element={<EditDealer />} />
        <Route path="/add-week-close" element={<AddWeekClose />} />
        <Route path="/edit-week-close" element={<EditWeekClose />} />
        <Route path="/add-vehicle" element={<AddVehicle />} />
        <Route path="/edit-vehicle" element={<EditVehicle />} />
        <Route path="/add-gsmpage" element={<AddGsm />} />
        <Route path="/edit-gsmpage" element={<EditGsm />} />
        <Route path="/add-factor" element={<AddFactor />} />
        <Route path="/edit-factor" element={<EditFactor />} />
        <Route path="/add-hsn-type" element={<AddHsn />} />
        <Route path="/edit-hsn-type" element={<EditHsn />} />
        <Route path="/add-sale" element={<AddSale />} />
        <Route path="/edit-sale" element={<EditSale />} />
        <Route
          path="/"
          element={
            <>
              <LoginForm />

            </>
          }
        />


        <Route
          path="/*"
          element={
            <>
              <div className="row">
                <div className="col-2 ">
                  <Sidebar />
                </div>
                <div className="col-2 ">
                  <Navbar />
                  <Routes>
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/rolemanage" element={<Role />} />
                    {/* <Route path="/profile" element={<Profile/>} /> */}
                    <Route path="/employee" element={<EmployeeDetails />} />
                    <Route path="/attendance" element={<ManageAttendace />} />
                    <Route path="/permision" element={<Permission />} />
                    <Route path="/mobileapp" element={<MobileApp />} />
                    <Route path="/website" element={<Website />} />
                    <Route path="/reporting" element={<Reporting />} />

                    <Route path="/resion" element={<Resion />} />

                    <Route path="/district" element={<DistrictDash />} />

                    <Route path="/state" element={<State />} />

                    <Route path="/city" element={<City />} />

                    <Route path="/territory" element={<Territory />} />
                    <Route path="/add-territory" element={<AddTerritory />} />
                    <Route path="/edit-territory" element={<EditTerritory />} />
                    <Route path="/blood-group" element={<BloodGroup />} />

                    <Route path="/dealer-type" element={<DealerType />} />

                    <Route path="/week-close" element={<WeekClose />} />

                    <Route path="/gender" element={<Gender />} />

                    <Route path="/vehicle" element={<Vehicle />} />

                    <Route path="/gsmpage" element={<GsmPage />} />

                    <Route path="/factor" element={<BrustFactor />} />

                    <Route path="/hsn-type" element={<HsnType />} />

                    <Route path="/sale-order" element={<SaleOrder />} />

                    <Route path="/tax-type" element={<TaxType />} />
                  </Routes>

                </div>
              </div>

            </>
          }
        />
      </Routes>
    </Router>


  );
}

export default Menubar;




