// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Set } from '@redwoodjs/router'

import ScaffoldLayout from 'src/layouts/ScaffoldLayout'

import { useAuth } from './auth'
import DashboardLayout from './layouts/DashboardLayout/DashboardLayout'

const Routes = () => {
  return (
    <Router useAuth={useAuth}>
      <Set wrap={ScaffoldLayout} title="Proposals" titleTo="proposals" buttonLabel="New Proposal" buttonTo="newProposal">
        <Route path="/proposals/new" page={ProposalNewProposalPage} name="newProposal" />
        <Route path="/proposals/{id:Int}/edit" page={ProposalEditProposalPage} name="editProposal" />
        <Route path="/proposals/{id:Int}" page={ProposalProposalPage} name="proposal" />
        <Route path="/proposals" page={ProposalProposalsPage} name="proposals" />
      </Set>
      <Set wrap={ScaffoldLayout} title="ProposalActivitities" titleTo="proposalActivitities" buttonLabel="New ProposalActivitity" buttonTo="newProposalActivitity">
        <Route path="/proposal-activitities/new" page={ProposalActivitityNewProposalActivitityPage} name="newProposalActivitity" />
        <Route path="/proposal-activitities/{id:Int}/edit" page={ProposalActivitityEditProposalActivitityPage} name="editProposalActivitity" />
        <Route path="/proposal-activitities/{id:Int}" page={ProposalActivitityProposalActivitityPage} name="proposalActivitity" />
        <Route path="/proposal-activitities" page={ProposalActivitityProposalActivititiesPage} name="proposalActivitities" />
      </Set>
      <Set wrap={ScaffoldLayout} title="CustomerPointOfContacts" titleTo="customerPointOfContacts" buttonLabel="New CustomerPointOfContact" buttonTo="newCustomerPointOfContact">
        <Route path="/customer-point-of-contacts/new" page={CustomerPointOfContactNewCustomerPointOfContactPage} name="newCustomerPointOfContact" />
        <Route path="/customer-point-of-contacts/{id:Int}/edit" page={CustomerPointOfContactEditCustomerPointOfContactPage} name="editCustomerPointOfContact" />
        <Route path="/customer-point-of-contacts/{id:Int}" page={CustomerPointOfContactCustomerPointOfContactPage} name="customerPointOfContact" />
        <Route path="/customer-point-of-contacts" page={CustomerPointOfContactCustomerPointOfContactsPage} name="customerPointOfContacts" />
      </Set>
      <Set wrap={ScaffoldLayout} title="Customers" titleTo="customers" buttonLabel="New Customer" buttonTo="newCustomer">
        <Route path="/customers/new" page={CustomerNewCustomerPage} name="newCustomer" />
        <Route path="/customers/{id:Int}/edit" page={CustomerEditCustomerPage} name="editCustomer" />
        <Route path="/customers/{id:Int}" page={CustomerCustomerPage} name="customer" />
        <Route path="/customers" page={CustomerCustomersPage} name="customers" />
      </Set>
      <Route path="/login" page={LoginPage} name="login" />
      <Route path="/signup" page={SignupPage} name="signup" />
      <Route path="/forgot-password" page={ForgotPasswordPage} name="forgotPassword" />
      <Route path="/reset-password" page={ResetPasswordPage} name="resetPassword" />
      <Set wrap={ScaffoldLayout} title="PointOfContacts" titleTo="pointOfContacts" buttonLabel="New PointOfContact" buttonTo="newPointOfContact">
        <Route path="/point-of-contacts/new" page={PointOfContactNewPointOfContactPage} name="newPointOfContact" />
        <Route path="/point-of-contacts/{id:Int}/edit" page={PointOfContactEditPointOfContactPage} name="editPointOfContact" />
        <Route path="/point-of-contacts/{id:Int}" page={PointOfContactPointOfContactPage} name="pointOfContact" />
        <Route path="/point-of-contacts" page={PointOfContactPointOfContactsPage} name="pointOfContacts" />
      </Set>
      <Set wrap={ScaffoldLayout} title="SocioEconDesignations" titleTo="socioEconDesignations" buttonLabel="New SocioEconDesignation" buttonTo="newSocioEconDesignation">
        <Route path="/socio-econ-designations/new" page={SocioEconDesignationNewSocioEconDesignationPage} name="newSocioEconDesignation" />
        <Route path="/socio-econ-designations/{sedID:Int}/edit" page={SocioEconDesignationEditSocioEconDesignationPage} name="editSocioEconDesignation" />
        <Route path="/socio-econ-designations/{sedID:Int}" page={SocioEconDesignationSocioEconDesignationPage} name="socioEconDesignation" />
        <Route path="/socio-econ-designations" page={SocioEconDesignationSocioEconDesignationsPage} name="socioEconDesignations" />
      </Set>
      <Set wrap={ScaffoldLayout} title="Certificates" titleTo="certificates" buttonLabel="New Certificate" buttonTo="newCertificate">
        <Route path="/certificates/new" page={CertificateNewCertificatePage} name="newCertificate" />
        <Route path="/certificates/{id:Int}/edit" page={CertificateEditCertificatePage} name="editCertificate" />
        <Route path="/certificates/{id:Int}" page={CertificateCertificatePage} name="certificate" />
        <Route path="/certificates" page={CertificateCertificatesPage} name="certificates" />
      </Set>
      <Set wrap={ScaffoldLayout} title="Companies" titleTo="companies" buttonLabel="New Company" buttonTo="newCompany">
        <Route path="/companies/new" page={CompanyNewCompanyPage} name="newCompany" />
        <Route path="/companies/{id:Int}/edit" page={CompanyEditCompanyPage} name="editCompany" />
        <Route path="/companies/{id:Int}" page={CompanyCompanyPage} name="company" />
        <Route path="/companies" page={CompanyCompaniesPage} name="companies" />
      </Set>
      <Route path="/" page={HomePage} name="home" />
      <Route path="/settings" page={SettingsPage} name="settings" />
      <Route notfound page={NotFoundPage} />
      <Set wrap={DashboardLayout}>
        <Route path="/dashboard" page={DashboardPage} name="dashboard" />
        <Route path="/writing" page={WritingPage} name="writing" />
        <Route path="/submission" page={SubmissionPage} name="submission" />
        <Route path="/review" page={ReviewPage} name="review" />
        <Route path="/recovery" page={RecoveryPage} name="recovery" />
        <Route path="/post-submission" page={PostSubmissionPage} name="postSubmission" />
        <Route path="/planning" page={PlanningPage} name="planning" />
        <Route path="/finalize" page={FinalizePage} name="finalize" />
        <Route path="/evaluation" page={EvaluationPage} name="evaluation" />
        <Route path="/build" page={BuildPage} name="build" />
        <Route path="/archive" page={ArchivePage} name="archive" />
      </Set>
    </Router>
  )
}

export default Routes
