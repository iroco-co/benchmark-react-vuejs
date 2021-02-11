//
//  IrocoBenchmarkUITests.swift
//  IrocoBenchmarkUITests
//
//  Created by Lucien Perouze on 10/02/2021.
//

import XCTest

class IrocoBenchmarkUITests: XCTestCase {

    override func setUpWithError() throws {
        // Put setup code here. This method is called before the invocation of each test method in the class.

        // In UI tests it is usually best to stop immediately when a failure occurs.
        continueAfterFailure = false

        // In UI tests it’s important to set the initial state - such as interface orientation - required for your tests before they run. The setUp method is a good place to do this.
    }

    override func tearDownWithError() throws {
        // Put teardown code here. This method is called after the invocation of each test method in the class.
    }

    func testLaunchPerformance() throws {
        if #available(macOS 10.15, iOS 13.0, tvOS 13.0, *) {
            // This measures how long it takes to launch your application.
            measure(metrics: [XCTApplicationLaunchMetric()]) {
                XCUIApplication().launch()
            }
        }
    }
  
    // Add hidden metrics: https://indiestack.com/2018/02/xcodes-secret-performance-tests/
    #if !os(Linux)
    override class var defaultPerformanceMetrics: [XCTPerformanceMetric] {
      return [
        .wallClockTime,
        XCTPerformanceMetric(rawValue: "com.apple.XCTPerformanceMetric_UserTime"),
        XCTPerformanceMetric(rawValue: "com.apple.XCTPerformanceMetric_RunTime"),
        XCTPerformanceMetric(rawValue: "com.apple.XCTPerformanceMetric_SystemTime"),
        XCTPerformanceMetric(rawValue: "com.apple.XCTPerformanceMetric_TransientVMAllocationsKilobytes"),
        XCTPerformanceMetric(rawValue: "com.apple.XCTPerformanceMetric_TemporaryHeapAllocationsKilobytes"),
        XCTPerformanceMetric(rawValue: "com.apple.XCTPerformanceMetric_HighWaterMarkForVMAllocations"),
        XCTPerformanceMetric(rawValue: "com.apple.XCTPerformanceMetric_TotalHeapAllocationsKilobytes"),
        XCTPerformanceMetric(rawValue: "com.apple.XCTPerformanceMetric_PersistentVMAllocations"),
        XCTPerformanceMetric(rawValue: "com.apple.XCTPerformanceMetric_PersistentHeapAllocations"),
        XCTPerformanceMetric(rawValue: "com.apple.XCTPerformanceMetric_TransientHeapAllocationsKilobytes"),
        XCTPerformanceMetric(rawValue: "com.apple.XCTPerformanceMetric_PersistentHeapAllocationsNodes"),
        XCTPerformanceMetric(rawValue: "com.apple.XCTPerformanceMetric_HighWaterMarkForHeapAllocations"),
        XCTPerformanceMetric(rawValue: "com.apple.XCTPerformanceMetric_TransientHeapAllocationsNodes")
      ]
    }
    #endif
  
    func testUsagePerformance() throws {

      let app = XCUIApplication()
      app.launch()
      
      sleep(4)
    
      self.measure {

        let search = app.textFields["search"]
        
        search.tap()
        
        search.typeText("Hello World!")
        
        search.typeText("\n")
        
        app.scrollViews.element.swipeUp()
        
        app.otherElements["mail-10"].firstMatch.tap()
        
        sleep(1)
        
        let mailsList = app.scrollViews.element
        
        mailsList.swipeUp()
        
        mailsList.swipeUp()
        
        mailsList.swipeUp()
        
        app.otherElements["back"].firstMatch.tap()
        
        search.tap()
        
        search.press(forDuration: 1.2)
        
        let select = app.menuItems["Select All"]
        
        if select.waitForExistence(timeout: 0.5), select.exists {
            select.tap()
            search.typeText(XCUIKeyboardKey.delete.rawValue)
        }
      
      }
    
    }

}
