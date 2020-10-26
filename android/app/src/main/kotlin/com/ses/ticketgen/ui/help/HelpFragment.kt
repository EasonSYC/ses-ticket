package com.ses.ticketgen.ui.help

import android.view.LayoutInflater
import android.view.ViewGroup
import android.os.Bundle
import androidx.lifecycle.ViewModelProviders
import com.ses.ticketgen.R
import android.content.Intent
import android.net.Uri
import android.view.View
import android.widget.Button
import androidx.fragment.app.Fragment

class HelpFragment : Fragment() {
    private var helpViewModel: HelpViewModel? = null
    var hpreg: Button? = null
    var hppol: Button? = null
    override fun onCreateView(inflater: LayoutInflater,
                              container: ViewGroup?, savedInstanceState: Bundle?): View? {
        helpViewModel = ViewModelProviders.of(this).get(HelpViewModel::class.java)
        val root = inflater.inflate(R.layout.fragment_help, container, false)
        hpreg = root.findViewById(R.id.hp)
        hppol = root.findViewById(R.id.hppol)
        hpreg?.setOnClickListener(HpListener())
        hppol?.setOnClickListener(HpPolListener())
        return root
    }

    private inner class HpListener : View.OnClickListener {
        override fun onClick(v: View) {
            val URL = "https://ses-1987.gitee.io/sesticketgen/help.html"
            openurl(URL)
        }
    }

    private inner class HpPolListener : View.OnClickListener {
        override fun onClick(v: View) {
            val URL = "https://ses-1987.gitee.io/sesticketgen/policy.html"
            openurl(URL)
        }
    }

    private fun openurl(u: String) {
        val intent = Intent()
        Intent(Intent.ACTION_VIEW)
        intent.action = "android.intent.action.VIEW"
        val url = Uri.parse(u)
        intent.data = url
        startActivity(intent)
    }
}