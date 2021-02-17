package co.iroco.benchmark

import org.junit.Rule
import org.junit.Test
import org.junit.runner.RunWith


import androidx.test.ext.junit.runners.AndroidJUnit4
import androidx.test.rule.ActivityTestRule

import androidx.test.espresso.Espresso
import androidx.test.espresso.Espresso.onView
import androidx.test.espresso.action.ViewActions.click
import androidx.test.espresso.action.ViewActions.typeText
import androidx.test.espresso.assertion.ViewAssertions.matches
import androidx.test.espresso.matcher.ViewMatchers.*
import org.hamcrest.CoreMatchers.allOf
import org.hamcrest.CoreMatchers.not

@RunWith(AndroidJUnit4::class)
class MainActivityTest  {

    @get:Rule
    var activityRule: ActivityTestRule<MainActivity> = ActivityTestRule(MainActivity::class.java)

    @Test
    fun performancesTest() {
        try {
            Thread.sleep(1500)
        } catch (e: InterruptedException) {
            e.printStackTrace()
        }

        // Finds the Username element
        onView(allOf(withContentDescription("test-Username"), isDisplayed()))
                .check(matches(withText("")))
                .perform(typeText("standard_user"))


        // Finds the Password element
        onView(allOf(withContentDescription("test-Password"), isDisplayed()))
                .check(matches(withText("")))
                .perform(typeText("secret_sauce"))
        Espresso.closeSoftKeyboard()

        // Finds the Login Button
        onView(allOf(withContentDescription("test-LOGIN"), isDisplayed()))
                .check(matches(not(isClickable())))
                .perform(click())

        // Finds the Products page
        onView(allOf(withContentDescription("test-PRODUCTS"), isDisplayed()))

    }
}