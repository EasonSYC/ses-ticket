package com.ses.ticketgen.ui.gene

import android.content.Context
import android.content.Intent
import android.graphics.drawable.ColorDrawable
import android.net.Uri
import android.os.Bundle
import android.text.TextUtils
import android.view.Gravity
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.Button
import android.widget.CheckBox
import android.widget.EditText
import android.widget.PopupWindow
import androidx.fragment.app.Fragment
import androidx.lifecycle.ViewModelProviders
import com.ses.ticketgen.R
import java.util.*

class GeneFragment : Fragment() {
    private var geneViewModel: GeneViewModel? = null
    var nam: EditText? = null
    var month: EditText? = null
    var day: EditText? = null
    var rdb: CheckBox? = null
    var AF: Button? = null
    var BA: Button? = null
    var CA: Button? = null
    var DA: Button? = null
    var EB: Button? = null
    var FE: Button? = null
    var GC: Button? = null
    var HD: Button? = null
    var IB: Button? = null
    var pol: Button? = null
    var mContext: Context? = null
    override fun onCreateView(inflater: LayoutInflater,
                              container: ViewGroup?, savedInstanceState: Bundle?): View? {
        geneViewModel = ViewModelProviders.of(this).get(GeneViewModel::class.java)
        val root = inflater.inflate(R.layout.fragment_gene, container, false)
        mContext = root.context
        val calendar = Calendar.getInstance()
        val mmonth = calendar[Calendar.MONTH] + 1
        val dday = calendar[Calendar.DAY_OF_MONTH]
        nam = root.findViewById(R.id.name)
        month = root.findViewById(R.id.month)
        day = root.findViewById(R.id.day)
        month?.setText(Integer.toString(mmonth))
        day?.setText(Integer.toString(dday))
        month?.setHint(Integer.toString(mmonth))
        day?.setHint(Integer.toString(dday))
        AF = root.findViewById(R.id.AF)
        BA = root.findViewById(R.id.BA)
        CA = root.findViewById(R.id.CA)
        DA = root.findViewById(R.id.DA)
        EB = root.findViewById(R.id.EB)
        FE = root.findViewById(R.id.FE)
        GC = root.findViewById(R.id.GC)
        HD = root.findViewById(R.id.HD)
        IB = root.findViewById(R.id.IB)
        pol = root.findViewById(R.id.policy)
        rdb = root.findViewById(R.id.agree)
        AF?.setOnClickListener(ButtonListener())
        BA?.setOnClickListener(ButtonListener())
        CA?.setOnClickListener(ButtonListener())
        DA?.setOnClickListener(ButtonListener())
        EB?.setOnClickListener(ButtonListener())
        FE?.setOnClickListener(ButtonListener())
        GC?.setOnClickListener(ButtonListener())
        HD?.setOnClickListener(ButtonListener())
        IB?.setOnClickListener(ButtonListener())
        pol?.setOnClickListener(PolicyListener())
        return root
    }

    private inner class PolicyListener : View.OnClickListener {
        override fun onClick(v: View) {
            val URL = "https://jiubugaosuni.gitee.io/sesticket-gen/policy.html"
            openurl(URL)
        }
    }

    private inner class ButtonListener : View.OnClickListener {
        override fun onClick(v: View) {
            if (TextUtils.isEmpty(nam!!.text) || TextUtils.isEmpty(month!!.text) || TextUtils.isEmpty(day!!.text)) {
                popup_invalid(v)
            } else {
                var id = nam!!.text.toString();
                val moth = month!!.text.toString().toInt()
                val dy = day!!.text.toString().toInt()
                if (!rdb!!.isChecked) {
                    popup_notcheck(v)
                } else if (moth < 1 || moth > 12 || dy < 1 || dy > 31) {
                    popup_invalid(v)
                } else {
                    var type = 0
                    val vId = v.id
                    if (vId == R.id.AF) {
                        type = 1
                    } else if (vId == R.id.BA) {
                        type = 2
                    } else if (vId == R.id.CA) {
                        type = 3
                    } else if (vId == R.id.DA) {
                        type = 4
                    } else if (vId == R.id.EB) {
                        type = 5
                    } else if (vId == R.id.FE) {
                        type = 6
                    } else if (vId == R.id.GC) {
                        type = 7
                    } else if (vId == R.id.HD) {
                        type = 8
                    } else if (vId == R.id.IB) {
                        type = 9
                    }
                    val tim = moth * 32 + dy
                    val cs = type * 416 + tim
                    val URL = "https://jiubugaosuni.gitee.io/sesticket-gen/result/print.html?" + id + "&" + Integer.toHexString(cs)
                    openurl(URL)
                }
            }
        }
    }

    private fun popup_invalid(v: View) {
        val view = LayoutInflater.from(mContext).inflate(R.layout.alert, null, false)
        val popup = PopupWindow(
                view, ViewGroup.LayoutParams.WRAP_CONTENT, ViewGroup.LayoutParams.WRAP_CONTENT, true
        )
        popup.isTouchable = true
        popup.setTouchInterceptor { v, event -> false }
        popup.setBackgroundDrawable(ColorDrawable(0x00000000))
        popup.showAtLocation(v, Gravity.CENTER, 0, 0)
    }

    private fun popup_notcheck(v: View) {
        val view = LayoutInflater.from(mContext).inflate(R.layout.alert2, null, false)
        val popup = PopupWindow(
                view, ViewGroup.LayoutParams.WRAP_CONTENT, ViewGroup.LayoutParams.WRAP_CONTENT, true
        )
        popup.isTouchable = true
        popup.setTouchInterceptor { v, event -> false }
        popup.setBackgroundDrawable(ColorDrawable(0x00000000))
        popup.showAtLocation(v, Gravity.CENTER, 0, 0)
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