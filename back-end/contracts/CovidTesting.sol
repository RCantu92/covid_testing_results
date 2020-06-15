pragma solidity ^0.4.25;

contract CovidTesting {

    // Create a variable to store the
    // address of the contract owner.
    address contractOwner;

    // Set the msg.sender of the contract
    // as the address that owns the contract.
    constructor() public {
        contractOwner = msg.sender;
    }

    // Struct storing a heatlh professional's
    // ethereum address and if they are
    // qualified to administer COVID tests.
    struct HealthcareProf {
        address ethAddr;
        bool covidQualified;
    }

    // Struct that storess a civillian;s ethereum
    // address, whether they've been tested for
    // COVID, what time the test was done, and
    // who administered the test.
    struct Civillian {
        address ethAddr;
        bool tested;
        uint timeOfTest;
        uint healthcareProfLicenseNum;
    }

    // Mapping that allows you to input a healthcare
    // professionals license number to pull up their
    // respective struct.
    mapping(uint => HealthcareProf) healthcareProfById;

    // Mapping that allows you to input a civillian's
    // government issued ID number to pull up their
    // respective struct.
    mapping(uint => Civillian) civillianByGovntId;

    // Modifier that verifies the owner of the contract
    // is the msg.sender.
    modifier onlyContractOwner {
        require(msg.sender == contractOwner, "You are not the contract owner.");
        _;
    }

    // Modifier that verifies person calling the function
    // is a healthcare professional and COVID qualified.
    modifier onlyHealthcareProf(uint _licenseNum) {
        require(msg.sender == healthcareProfById[_licenseNum].ethAddr, "You are not a qualified healthcare professional.");
        require(healthcareProfById[_licenseNum].covidQualified == true, "You are not a qualified healthcare professional.");
        _;
    }

    // Function that takes a healthcare professional's
    // license number as a argument to add them and show
    // they are qualified to administer COVID tests.
    function addHealthcareProfessional(address _healthcareProfAddr, uint _licenseNum) public onlyContractOwner {
        healthcareProfById[_licenseNum] = HealthcareProf(_healthcareProfAddr, true);
    }

    // Function that takes the civillian's government
    // ID number as a argument to add them and then
    // show they have been tested.
    function addTestedCivillian(uint _govntId, uint _healthcareProflicenseNum, address _civillianEthAddr)
    public onlyHealthcareProf(_healthcareProflicenseNum){
        civillianByGovntId[_govntId] = Civillian(_civillianEthAddr, true, now, _healthcareProflicenseNum);
    }

    // Function that would check to verify
    // that a civillian has been tested for COVID.
    // Returns whether they have been tested, time
    // of test (relative to block time)  and the
    // license number of the healthcare professional
    // who administered the test.
    function isCivillianTested(uint _govntId) public view returns(bool, uint, uint) {
        return(
            civillianByGovntId[_govntId].tested,
            civillianByGovntId[_govntId].timeOfTest,
            civillianByGovntId[_govntId].healthcareProfLicenseNum
        );
    }

    // Function that would check to verify
    // that a healthcare professional is qualified
    // to administer COVID testing.
    function isHealthcareProfQualified(uint _healthcareProflicenseNum) public view returns(bool) {
        return(healthcareProfById[_healthcareProflicenseNum].covidQualified);
    }
}