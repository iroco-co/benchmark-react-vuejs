package co.iroco.benchmark

import android.support.test.filters.LargeTest
import android.widget.ScrollView
import androidx.test.espresso.Espresso.onView
import androidx.test.espresso.action.ViewActions.*
import androidx.test.espresso.intent.Intents
import androidx.test.espresso.matcher.ViewMatchers.*
import androidx.test.ext.junit.rules.ActivityScenarioRule
import androidx.test.ext.junit.runners.AndroidJUnit4
import co.iroco.benchmark.EspressoViewFinder.waitForDisplayed
import org.hamcrest.Matchers.allOf
import org.junit.After
import org.junit.Before
import org.junit.Rule
import org.junit.Test
import org.junit.runner.RunWith


@RunWith(AndroidJUnit4::class)
@LargeTest
class MainActivityTest  {

    @get:Rule
    var activityRule: ActivityScenarioRule<MainActivity> = ActivityScenarioRule(MainActivity::class.java)


    @Before
    fun setUp() {
        Intents.init()
    }

    @After
    fun tearDown() {
        Intents.release()
    }

    @Test
    fun performancesTest() {
        waitForDisplayed(withContentDescription("search")) {
                search -> onView(search).perform(typeText("Hello World!\n"))
        }

        Thread.sleep(2000)

        waitForDisplayed(withContentDescription("mail-4")) {
                mail -> onView(mail).perform(click())
        }

        Thread.sleep(2000)
    }
}