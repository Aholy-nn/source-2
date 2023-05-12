<!--
 * @Description: In User Settings Edit
 * @Author: xx
 * @Date: 2019-09-29 15:36:57
 * @LastEditTime : 2020-01-04 15:11:01
 * @LastEditors  : Please set LastEditors
 -->
<template>
<div>
  <z-card dis-hover class="m-t-15">
    <h4> 使用方法</h4>
    <div style="height: 50px;line-height: 50px;">
        <code class="html hljs xml">
            <span class="hljs-tag">&lt;
                <span class="hljs-title">Icon</span>
                <span class="hljs-attribute">type</span>=
                <span class="hljs-value">&quot;checkmark&quot;</span>
                /&gt;
            </span>
        </code>
        &nbsp;渲染后为
        <code class="html hljs xml">
            <span class="hljs-tag">&lt;
                <span class="hljs-title">i</span>
                <span class="hljs-attribute">class</span>=
                <span class="hljs-value">&quot;zvu-icon zvu-icon-checkmark&quot;</span>&gt;
            </span>
            <span class="hljs-tag">&lt;/
                <span class="hljs-title">i</span>&gt;
            </span>
        </code>
    </div>
    <div class="demo-api">
        <div class="anchor">
            <h2 id="API">API</h2>
        </div>
        <div class="anchor">
            <h3 id="Icon_props">Icon props</h3>
        </div>
        <table>
            <thead>
                <tr>
                    <th>属性</th>
                    <th>说明</th>
                    <th>类型</th>
                    <th>默认值</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>type</td>
                    <td>图标的名称</td>
                    <td>String</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>size</td>
                    <td>图标的大小，单位是 px</td>
                    <td>Number | String</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>color</td>
                    <td>图标的颜色</td>
                    <td>String</td>
                    <td>-</td>
                </tr>
            </tbody>
        </table>
    </div>
  </z-card>
  <z-card dis-hover class="m-t-15">
    <div class="icons-box">
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ionic" style="font-size: 32px;"></i>
            <p> ionic </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-arrow-up-a" style="font-size: 32px;"></i>
            <p> arrow-up-a </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-arrow-right-a" style="font-size: 32px;"></i>
            <p> arrow-right-a </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-arrow-down-a" style="font-size: 32px;"></i>
            <p> arrow-down-a </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-arrow-left-a" style="font-size: 32px;"></i>
            <p> arrow-left-a </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-arrow-up-b" style="font-size: 32px;"></i>
            <p> arrow-up-b </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-arrow-right-b" style="font-size: 32px;"></i>
            <p> arrow-right-b </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-arrow-down-b" style="font-size: 32px;"></i>
            <p> arrow-down-b </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-arrow-left-b" style="font-size: 32px;"></i>
            <p> arrow-left-b </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-arrow-up-c" style="font-size: 32px;"></i>
            <p> arrow-up-c </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-arrow-right-c" style="font-size: 32px;"></i>
            <p> arrow-right-c </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-arrow-down-c" style="font-size: 32px;"></i>
            <p> arrow-down-c </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-arrow-left-c" style="font-size: 32px;"></i>
            <p> arrow-left-c </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-arrow-return-right" style="font-size: 32px;"></i>
            <p> arrow-return-right </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-arrow-return-left" style="font-size: 32px;"></i>
            <p> arrow-return-left </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-arrow-swap" style="font-size: 32px;"></i>
            <p> arrow-swap </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-arrow-shrink" style="font-size: 32px;"></i>
            <p> arrow-shrink </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-arrow-expand" style="font-size: 32px;"></i>
            <p> arrow-expand </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-arrow-move" style="font-size: 32px;"></i>
            <p> arrow-move </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-arrow-resize" style="font-size: 32px;"></i>
            <p> arrow-resize </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-chevron-up" style="font-size: 32px;"></i>
            <p> chevron-up </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-chevron-right" style="font-size: 32px;"></i>
            <p> chevron-right </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-chevron-down" style="font-size: 32px;"></i>
            <p> chevron-down </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-chevron-left" style="font-size: 32px;"></i>
            <p> chevron-left </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-navicon-round" style="font-size: 32px;"></i>
            <p> navicon-round </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-navicon" style="font-size: 32px;"></i>
            <p> navicon </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-drag" style="font-size: 32px;"></i>
            <p> drag </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-log-in" style="font-size: 32px;"></i>
            <p> log-in </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-log-out" style="font-size: 32px;"></i>
            <p> log-out </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-checkmark-round" style="font-size: 32px;"></i>
            <p> checkmark-round </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-checkmark" style="font-size: 32px;"></i>
            <p> checkmark </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-checkmark-circled" style="font-size: 32px;"></i>
            <p> checkmark-circled </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-close-round" style="font-size: 32px;"></i>
            <p> close-round </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-close" style="font-size: 32px;"></i>
            <p> close </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-close-circled" style="font-size: 32px;"></i>
            <p> close-circled </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-plus-round" style="font-size: 32px;"></i>
            <p> plus-round </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-plus" style="font-size: 32px;"></i>
            <p> plus </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-plus-circled" style="font-size: 32px;"></i>
            <p> plus-circled </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-minus-round" style="font-size: 32px;"></i>
            <p> minus-round </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-minus" style="font-size: 32px;"></i>
            <p> minus </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-minus-circled" style="font-size: 32px;"></i>
            <p> minus-circled </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-information" style="font-size: 32px;"></i>
            <p> information </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-information-circled" style="font-size: 32px;"></i>
            <p> information-circled </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-help" style="font-size: 32px;"></i>
            <p> help </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-help-circled" style="font-size: 32px;"></i>
            <p> help-circled </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-backspace-outline" style="font-size: 32px;"></i>
            <p> backspace-outline </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-backspace" style="font-size: 32px;"></i>
            <p> backspace </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-help-buoy" style="font-size: 32px;"></i>
            <p> help-buoy </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-asterisk" style="font-size: 32px;"></i>
            <p> asterisk </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-alert" style="font-size: 32px;"></i>
            <p> alert </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-alert-circled" style="font-size: 32px;"></i>
            <p> alert-circled </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-refresh" style="font-size: 32px;"></i>
            <p> refresh </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-loop" style="font-size: 32px;"></i>
            <p> loop </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-shuffle" style="font-size: 32px;"></i>
            <p> shuffle </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-home" style="font-size: 32px;"></i>
            <p> home </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-search" style="font-size: 32px;"></i>
            <p> search </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-flag" style="font-size: 32px;"></i>
            <p> flag </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-star" style="font-size: 32px;"></i>
            <p> star </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-heart" style="font-size: 32px;"></i>
            <p> heart </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-heart-broken" style="font-size: 32px;"></i>
            <p> heart-broken </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-gear-a" style="font-size: 32px;"></i>
            <p> gear-a </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-gear-b" style="font-size: 32px;"></i>
            <p> gear-b </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-toggle-filled" style="font-size: 32px;"></i>
            <p> toggle-filled </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-toggle" style="font-size: 32px;"></i>
            <p> toggle </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-settings" style="font-size: 32px;"></i>
            <p> settings </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-wrench" style="font-size: 32px;"></i>
            <p> wrench </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-hammer" style="font-size: 32px;"></i>
            <p> hammer </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-edit" style="font-size: 32px;"></i>
            <p> edit </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-trash-a" style="font-size: 32px;"></i>
            <p> trash-a </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-trash-b" style="font-size: 32px;"></i>
            <p> trash-b </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-document" style="font-size: 32px;"></i>
            <p> document </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-document-text" style="font-size: 32px;"></i>
            <p> document-text </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-clipboard" style="font-size: 32px;"></i>
            <p> clipboard </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-scissors" style="font-size: 32px;"></i>
            <p> scissors </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-funnel" style="font-size: 32px;"></i>
            <p> funnel </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-bookmark" style="font-size: 32px;"></i>
            <p> bookmark </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-email" style="font-size: 32px;"></i>
            <p> email </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-email-unread" style="font-size: 32px;"></i>
            <p> email-unread </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-folder" style="font-size: 32px;"></i>
            <p> folder </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-filing" style="font-size: 32px;"></i>
            <p> filing </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-archive" style="font-size: 32px;"></i>
            <p> archive </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-reply" style="font-size: 32px;"></i>
            <p> reply </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-reply-all" style="font-size: 32px;"></i>
            <p> reply-all </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-forward" style="font-size: 32px;"></i>
            <p> forward </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-share" style="font-size: 32px;"></i>
            <p> share </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-paper-airplane" style="font-size: 32px;"></i>
            <p> paper-airplane </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-link" style="font-size: 32px;"></i>
            <p> link </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-paperclip" style="font-size: 32px;"></i>
            <p> paperclip </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-compose" style="font-size: 32px;"></i>
            <p> compose </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-briefcase" style="font-size: 32px;"></i>
            <p> briefcase </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-medkit" style="font-size: 32px;"></i>
            <p> medkit </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-at" style="font-size: 32px;"></i>
            <p> at </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-pound" style="font-size: 32px;"></i>
            <p> pound </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-quote" style="font-size: 32px;"></i>
            <p> quote </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-cloud" style="font-size: 32px;"></i>
            <p> cloud </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-upload" style="font-size: 32px;"></i>
            <p> upload </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-more" style="font-size: 32px;"></i>
            <p> more </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-grid" style="font-size: 32px;"></i>
            <p> grid </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-calendar" style="font-size: 32px;"></i>
            <p> calendar </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-clock" style="font-size: 32px;"></i>
            <p> clock </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-compass" style="font-size: 32px;"></i>
            <p> compass </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-pinpoint" style="font-size: 32px;"></i>
            <p> pinpoint </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-pin" style="font-size: 32px;"></i>
            <p> pin </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-navigate" style="font-size: 32px;"></i>
            <p> navigate </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-location" style="font-size: 32px;"></i>
            <p> location </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-map" style="font-size: 32px;"></i>
            <p> map </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-lock-combination" style="font-size: 32px;"></i>
            <p> lock-combination </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-locked" style="font-size: 32px;"></i>
            <p> locked </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-unlocked" style="font-size: 32px;"></i>
            <p> unlocked </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-key" style="font-size: 32px;"></i>
            <p> key </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-arrow-graph-up-right" style="font-size: 32px;"></i>
            <p> arrow-graph-up-right </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-arrow-graph-down-right" style="font-size: 32px;"></i>
            <p> arrow-graph-down-right </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-arrow-graph-up-left" style="font-size: 32px;"></i>
            <p> arrow-graph-up-left </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-arrow-graph-down-left" style="font-size: 32px;"></i>
            <p> arrow-graph-down-left </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-stats-bars" style="font-size: 32px;"></i>
            <p> stats-bars </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-connection-bars" style="font-size: 32px;"></i>
            <p> connection-bars </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-pie-graph" style="font-size: 32px;"></i>
            <p> pie-graph </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-chatbubble" style="font-size: 32px;"></i>
            <p> chatbubble </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-chatbubble-working" style="font-size: 32px;"></i>
            <p> chatbubble-working </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-chatbubbles" style="font-size: 32px;"></i>
            <p> chatbubbles </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-chatbox" style="font-size: 32px;"></i>
            <p> chatbox </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-chatbox-working" style="font-size: 32px;"></i>
            <p> chatbox-working </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-chatboxes" style="font-size: 32px;"></i>
            <p> chatboxes </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-person" style="font-size: 32px;"></i>
            <p> person </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-person-add" style="font-size: 32px;"></i>
            <p> person-add </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-person-stalker" style="font-size: 32px;"></i>
            <p> person-stalker </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-woman" style="font-size: 32px;"></i>
            <p> woman </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-man" style="font-size: 32px;"></i>
            <p> man </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-female" style="font-size: 32px;"></i>
            <p> female </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-male" style="font-size: 32px;"></i>
            <p> male </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-transgender" style="font-size: 32px;"></i>
            <p> transgender </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-fork" style="font-size: 32px;"></i>
            <p> fork </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-knife" style="font-size: 32px;"></i>
            <p> knife </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-spoon" style="font-size: 32px;"></i>
            <p> spoon </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-soup-can-outline" style="font-size: 32px;"></i>
            <p> soup-can-outline </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-soup-can" style="font-size: 32px;"></i>
            <p> soup-can </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-beer" style="font-size: 32px;"></i>
            <p> beer </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-wineglass" style="font-size: 32px;"></i>
            <p> wineglass </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-coffee" style="font-size: 32px;"></i>
            <p> coffee </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-icecream" style="font-size: 32px;"></i>
            <p> icecream </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-pizza" style="font-size: 32px;"></i>
            <p> pizza </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-power" style="font-size: 32px;"></i>
            <p> power </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-mouse" style="font-size: 32px;"></i>
            <p> mouse </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-battery-full" style="font-size: 32px;"></i>
            <p> battery-full </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-battery-half" style="font-size: 32px;"></i>
            <p> battery-half </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-battery-low" style="font-size: 32px;"></i>
            <p> battery-low </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-battery-empty" style="font-size: 32px;"></i>
            <p> battery-empty </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-battery-charging" style="font-size: 32px;"></i>
            <p> battery-charging </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-wifi" style="font-size: 32px;"></i>
            <p> wifi </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-bluetooth" style="font-size: 32px;"></i>
            <p> bluetooth </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-calculator" style="font-size: 32px;"></i>
            <p> calculator </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-camera" style="font-size: 32px;"></i>
            <p> camera </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-eye" style="font-size: 32px;"></i>
            <p> eye </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-eye-disabled" style="font-size: 32px;"></i>
            <p> eye-disabled </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-flash" style="font-size: 32px;"></i>
            <p> flash </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-flash-off" style="font-size: 32px;"></i>
            <p> flash-off </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-qr-scanner" style="font-size: 32px;"></i>
            <p> qr-scanner </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-image" style="font-size: 32px;"></i>
            <p> image </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-images" style="font-size: 32px;"></i>
            <p> images </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-wand" style="font-size: 32px;"></i>
            <p> wand </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-contrast" style="font-size: 32px;"></i>
            <p> contrast </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-aperture" style="font-size: 32px;"></i>
            <p> aperture </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-crop" style="font-size: 32px;"></i>
            <p> crop </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-easel" style="font-size: 32px;"></i>
            <p> easel </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-paintbrush" style="font-size: 32px;"></i>
            <p> paintbrush </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-paintbucket" style="font-size: 32px;"></i>
            <p> paintbucket </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-monitor" style="font-size: 32px;"></i>
            <p> monitor </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-laptop" style="font-size: 32px;"></i>
            <p> laptop </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ipad" style="font-size: 32px;"></i>
            <p> ipad </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-iphone" style="font-size: 32px;"></i>
            <p> iphone </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ipod" style="font-size: 32px;"></i>
            <p> ipod </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-printer" style="font-size: 32px;"></i>
            <p> printer </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-usb" style="font-size: 32px;"></i>
            <p> usb </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-outlet" style="font-size: 32px;"></i>
            <p> outlet </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-bug" style="font-size: 32px;"></i>
            <p> bug </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-code" style="font-size: 32px;"></i>
            <p> code </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-code-working" style="font-size: 32px;"></i>
            <p> code-working </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-code-download" style="font-size: 32px;"></i>
            <p> code-download </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-fork-repo" style="font-size: 32px;"></i>
            <p> fork-repo </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-network" style="font-size: 32px;"></i>
            <p> network </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-pull-request" style="font-size: 32px;"></i>
            <p> pull-request </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-merge" style="font-size: 32px;"></i>
            <p> merge </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-xbox" style="font-size: 32px;"></i>
            <p> xbox </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-playstation" style="font-size: 32px;"></i>
            <p> playstation </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-steam" style="font-size: 32px;"></i>
            <p> steam </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-closed-captioning" style="font-size: 32px;"></i>
            <p> closed-captioning </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-videocamera" style="font-size: 32px;"></i>
            <p> videocamera </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-film-marker" style="font-size: 32px;"></i>
            <p> film-marker </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-disc" style="font-size: 32px;"></i>
            <p> disc </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-headphone" style="font-size: 32px;"></i>
            <p> headphone </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-music-note" style="font-size: 32px;"></i>
            <p> music-note </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-radio-waves" style="font-size: 32px;"></i>
            <p> radio-waves </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-speakerphone" style="font-size: 32px;"></i>
            <p> speakerphone </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-mic-a" style="font-size: 32px;"></i>
            <p> mic-a </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-mic-b" style="font-size: 32px;"></i>
            <p> mic-b </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-mic-c" style="font-size: 32px;"></i>
            <p> mic-c </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-volume-high" style="font-size: 32px;"></i>
            <p> volume-high </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-volume-medium" style="font-size: 32px;"></i>
            <p> volume-medium </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-volume-low" style="font-size: 32px;"></i>
            <p> volume-low </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-volume-mute" style="font-size: 32px;"></i>
            <p> volume-mute </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-levels" style="font-size: 32px;"></i>
            <p> levels </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-play" style="font-size: 32px;"></i>
            <p> play </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-pause" style="font-size: 32px;"></i>
            <p> pause </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-stop" style="font-size: 32px;"></i>
            <p> stop </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-record" style="font-size: 32px;"></i>
            <p> record </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-skip-forward" style="font-size: 32px;"></i>
            <p> skip-forward </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-skip-backward" style="font-size: 32px;"></i>
            <p> skip-backward </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-eject" style="font-size: 32px;"></i>
            <p> eject </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-bag" style="font-size: 32px;"></i>
            <p> bag </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-card" style="font-size: 32px;"></i>
            <p> card </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-cash" style="font-size: 32px;"></i>
            <p> cash </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-pricetag" style="font-size: 32px;"></i>
            <p> pricetag </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-pricetags" style="font-size: 32px;"></i>
            <p> pricetags </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-thumbsup" style="font-size: 32px;"></i>
            <p> thumbsup </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-thumbsdown" style="font-size: 32px;"></i>
            <p> thumbsdown </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-happy-outline" style="font-size: 32px;"></i>
            <p> happy-outline </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-happy" style="font-size: 32px;"></i>
            <p> happy </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-sad-outline" style="font-size: 32px;"></i>
            <p> sad-outline </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-sad" style="font-size: 32px;"></i>
            <p> sad </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-bowtie" style="font-size: 32px;"></i>
            <p> bowtie </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-tshirt-outline" style="font-size: 32px;"></i>
            <p> tshirt-outline </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-tshirt" style="font-size: 32px;"></i>
            <p> tshirt </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-trophy" style="font-size: 32px;"></i>
            <p> trophy </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-podium" style="font-size: 32px;"></i>
            <p> podium </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ribbon-a" style="font-size: 32px;"></i>
            <p> ribbon-a </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ribbon-b" style="font-size: 32px;"></i>
            <p> ribbon-b </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-university" style="font-size: 32px;"></i>
            <p> university </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-magnet" style="font-size: 32px;"></i>
            <p> magnet </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-beaker" style="font-size: 32px;"></i>
            <p> beaker </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-erlenmeyer-flask" style="font-size: 32px;"></i>
            <p> erlenmeyer-flask </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-egg" style="font-size: 32px;"></i>
            <p> egg </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-earth" style="font-size: 32px;"></i>
            <p> earth </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-planet" style="font-size: 32px;"></i>
            <p> planet </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-lightbulb" style="font-size: 32px;"></i>
            <p> lightbulb </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-cube" style="font-size: 32px;"></i>
            <p> cube </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-leaf" style="font-size: 32px;"></i>
            <p> leaf </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-waterdrop" style="font-size: 32px;"></i>
            <p> waterdrop </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-flame" style="font-size: 32px;"></i>
            <p> flame </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-fireball" style="font-size: 32px;"></i>
            <p> fireball </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-bonfire" style="font-size: 32px;"></i>
            <p> bonfire </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-umbrella" style="font-size: 32px;"></i>
            <p> umbrella </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-nuclear" style="font-size: 32px;"></i>
            <p> nuclear </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-no-smoking" style="font-size: 32px;"></i>
            <p> no-smoking </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-thermometer" style="font-size: 32px;"></i>
            <p> thermometer </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-speedometer" style="font-size: 32px;"></i>
            <p> speedometer </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-model-s" style="font-size: 32px;"></i>
            <p> model-s </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-plane" style="font-size: 32px;"></i>
            <p> plane </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-jet" style="font-size: 32px;"></i>
            <p> jet </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-load-a" style="font-size: 32px;"></i>
            <p> load-a </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-load-b" style="font-size: 32px;"></i>
            <p> load-b </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-load-c" style="font-size: 32px;"></i>
            <p> load-c </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-load-d" style="font-size: 32px;"></i>
            <p> load-d </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-ionic-outline" style="font-size: 32px;"></i>
            <p> ios-ionic-outline </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-arrow-back" style="font-size: 32px;"></i>
            <p> ios-arrow-back </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-arrow-forward" style="font-size: 32px;"></i>
            <p> ios-arrow-forward </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-arrow-up" style="font-size: 32px;"></i>
            <p> ios-arrow-up </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-arrow-right" style="font-size: 32px;"></i>
            <p> ios-arrow-right </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-arrow-down" style="font-size: 32px;"></i>
            <p> ios-arrow-down </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-arrow-left" style="font-size: 32px;"></i>
            <p> ios-arrow-left </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-arrow-thin-up" style="font-size: 32px;"></i>
            <p> ios-arrow-thin-up </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-arrow-thin-right" style="font-size: 32px;"></i>
            <p> ios-arrow-thin-right </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-arrow-thin-down" style="font-size: 32px;"></i>
            <p> ios-arrow-thin-down </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-arrow-thin-left" style="font-size: 32px;"></i>
            <p> ios-arrow-thin-left </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-circle-filled" style="font-size: 32px;"></i>
            <p> ios-circle-filled </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-circle-outline" style="font-size: 32px;"></i>
            <p> ios-circle-outline </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-checkmark-empty" style="font-size: 32px;"></i>
            <p> ios-checkmark-empty </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-checkmark-outline" style="font-size: 32px;"></i>
            <p> ios-checkmark-outline </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-checkmark" style="font-size: 32px;"></i>
            <p> ios-checkmark </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-plus-empty" style="font-size: 32px;"></i>
            <p> ios-plus-empty </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-plus-outline" style="font-size: 32px;"></i>
            <p> ios-plus-outline </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-plus" style="font-size: 32px;"></i>
            <p> ios-plus </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-close-empty" style="font-size: 32px;"></i>
            <p> ios-close-empty </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-close-outline" style="font-size: 32px;"></i>
            <p> ios-close-outline </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-close" style="font-size: 32px;"></i>
            <p> ios-close </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-minus-empty" style="font-size: 32px;"></i>
            <p> ios-minus-empty </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-minus-outline" style="font-size: 32px;"></i>
            <p> ios-minus-outline </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-minus" style="font-size: 32px;"></i>
            <p> ios-minus </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-information-empty" style="font-size: 32px;"></i>
            <p> ios-information-empty </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-information-outline" style="font-size: 32px;"></i>
            <p> ios-information-outline </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-information" style="font-size: 32px;"></i>
            <p> ios-information </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-help-empty" style="font-size: 32px;"></i>
            <p> ios-help-empty </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-help-outline" style="font-size: 32px;"></i>
            <p> ios-help-outline </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-help" style="font-size: 32px;"></i>
            <p> ios-help </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-search" style="font-size: 32px;"></i>
            <p> ios-search </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-search-strong" style="font-size: 32px;"></i>
            <p> ios-search-strong </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-star" style="font-size: 32px;"></i>
            <p> ios-star </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-star-half" style="font-size: 32px;"></i>
            <p> ios-star-half </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-star-outline" style="font-size: 32px;"></i>
            <p> ios-star-outline </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-heart" style="font-size: 32px;"></i>
            <p> ios-heart </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-heart-outline" style="font-size: 32px;"></i>
            <p> ios-heart-outline </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-more" style="font-size: 32px;"></i>
            <p> ios-more </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-more-outline" style="font-size: 32px;"></i>
            <p> ios-more-outline </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-home" style="font-size: 32px;"></i>
            <p> ios-home </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-home-outline" style="font-size: 32px;"></i>
            <p> ios-home-outline </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-cloud" style="font-size: 32px;"></i>
            <p> ios-cloud </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-cloud-outline" style="font-size: 32px;"></i>
            <p> ios-cloud-outline </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-cloud-upload" style="font-size: 32px;"></i>
            <p> ios-cloud-upload </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-cloud-upload-outline" style="font-size: 32px;"></i>
            <p> ios-cloud-upload-outline </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-cloud-download" style="font-size: 32px;"></i>
            <p> ios-cloud-download </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-cloud-download-outline" style="font-size: 32px;"></i>
            <p> ios-cloud-download-outline </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-upload" style="font-size: 32px;"></i>
            <p> ios-upload </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-upload-outline" style="font-size: 32px;"></i>
            <p> ios-upload-outline </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-download" style="font-size: 32px;"></i>
            <p> ios-download </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-download-outline" style="font-size: 32px;"></i>
            <p> ios-download-outline </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-refresh" style="font-size: 32px;"></i>
            <p> ios-refresh </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-refresh-outline" style="font-size: 32px;"></i>
            <p> ios-refresh-outline </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-refresh-empty" style="font-size: 32px;"></i>
            <p> ios-refresh-empty </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-reload" style="font-size: 32px;"></i>
            <p> ios-reload </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-loop-strong" style="font-size: 32px;"></i>
            <p> ios-loop-strong </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-loop" style="font-size: 32px;"></i>
            <p> ios-loop </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-bookmarks" style="font-size: 32px;"></i>
            <p> ios-bookmarks </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-bookmarks-outline" style="font-size: 32px;"></i>
            <p> ios-bookmarks-outline </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-book" style="font-size: 32px;"></i>
            <p> ios-book </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-book-outline" style="font-size: 32px;"></i>
            <p> ios-book-outline </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-flag" style="font-size: 32px;"></i>
            <p> ios-flag </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-flag-outline" style="font-size: 32px;"></i>
            <p> ios-flag-outline </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-glasses" style="font-size: 32px;"></i>
            <p> ios-glasses </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-glasses-outline" style="font-size: 32px;"></i>
            <p> ios-glasses-outline </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-browsers" style="font-size: 32px;"></i>
            <p> ios-browsers </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-browsers-outline" style="font-size: 32px;"></i>
            <p> ios-browsers-outline </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-at" style="font-size: 32px;"></i>
            <p> ios-at </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-at-outline" style="font-size: 32px;"></i>
            <p> ios-at-outline </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-pricetag" style="font-size: 32px;"></i>
            <p> ios-pricetag </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-pricetag-outline" style="font-size: 32px;"></i>
            <p> ios-pricetag-outline </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-pricetags" style="font-size: 32px;"></i>
            <p> ios-pricetags </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-pricetags-outline" style="font-size: 32px;"></i>
            <p> ios-pricetags-outline </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-cart" style="font-size: 32px;"></i>
            <p> ios-cart </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-cart-outline" style="font-size: 32px;"></i>
            <p> ios-cart-outline </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-chatboxes" style="font-size: 32px;"></i>
            <p> ios-chatboxes </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-chatboxes-outline" style="font-size: 32px;"></i>
            <p> ios-chatboxes-outline </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-chatbubble" style="font-size: 32px;"></i>
            <p> ios-chatbubble </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-chatbubble-outline" style="font-size: 32px;"></i>
            <p> ios-chatbubble-outline </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-cog" style="font-size: 32px;"></i>
            <p> ios-cog </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-cog-outline" style="font-size: 32px;"></i>
            <p> ios-cog-outline </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-gear" style="font-size: 32px;"></i>
            <p> ios-gear </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-gear-outline" style="font-size: 32px;"></i>
            <p> ios-gear-outline </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-settings" style="font-size: 32px;"></i>
            <p> ios-settings </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-settings-strong" style="font-size: 32px;"></i>
            <p> ios-settings-strong </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-toggle" style="font-size: 32px;"></i>
            <p> ios-toggle </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-toggle-outline" style="font-size: 32px;"></i>
            <p> ios-toggle-outline </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-analytics" style="font-size: 32px;"></i>
            <p> ios-analytics </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-analytics-outline" style="font-size: 32px;"></i>
            <p> ios-analytics-outline </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-pie" style="font-size: 32px;"></i>
            <p> ios-pie </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-pie-outline" style="font-size: 32px;"></i>
            <p> ios-pie-outline </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-pulse" style="font-size: 32px;"></i>
            <p> ios-pulse </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-pulse-strong" style="font-size: 32px;"></i>
            <p> ios-pulse-strong </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-filing" style="font-size: 32px;"></i>
            <p> ios-filing </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-filing-outline" style="font-size: 32px;"></i>
            <p> ios-filing-outline </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-box" style="font-size: 32px;"></i>
            <p> ios-box </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-box-outline" style="font-size: 32px;"></i>
            <p> ios-box-outline </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-compose" style="font-size: 32px;"></i>
            <p> ios-compose </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-compose-outline" style="font-size: 32px;"></i>
            <p> ios-compose-outline </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-trash" style="font-size: 32px;"></i>
            <p> ios-trash </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-trash-outline" style="font-size: 32px;"></i>
            <p> ios-trash-outline </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-copy" style="font-size: 32px;"></i>
            <p> ios-copy </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-copy-outline" style="font-size: 32px;"></i>
            <p> ios-copy-outline </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-email" style="font-size: 32px;"></i>
            <p> ios-email </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-email-outline" style="font-size: 32px;"></i>
            <p> ios-email-outline </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-undo" style="font-size: 32px;"></i>
            <p> ios-undo </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-undo-outline" style="font-size: 32px;"></i>
            <p> ios-undo-outline </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-redo" style="font-size: 32px;"></i>
            <p> ios-redo </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-redo-outline" style="font-size: 32px;"></i>
            <p> ios-redo-outline </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-paperplane" style="font-size: 32px;"></i>
            <p> ios-paperplane </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-paperplane-outline" style="font-size: 32px;"></i>
            <p> ios-paperplane-outline </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-folder" style="font-size: 32px;"></i>
            <p> ios-folder </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-folder-outline" style="font-size: 32px;"></i>
            <p> ios-folder-outline </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-paper" style="font-size: 32px;"></i>
            <p> ios-paper </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-paper-outline" style="font-size: 32px;"></i>
            <p> ios-paper-outline </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-list" style="font-size: 32px;"></i>
            <p> ios-list </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-list-outline" style="font-size: 32px;"></i>
            <p> ios-list-outline </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-world" style="font-size: 32px;"></i>
            <p> ios-world </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-world-outline" style="font-size: 32px;"></i>
            <p> ios-world-outline </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-alarm" style="font-size: 32px;"></i>
            <p> ios-alarm </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-alarm-outline" style="font-size: 32px;"></i>
            <p> ios-alarm-outline </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-speedometer" style="font-size: 32px;"></i>
            <p> ios-speedometer </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-speedometer-outline" style="font-size: 32px;"></i>
            <p> ios-speedometer-outline </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-stopwatch" style="font-size: 32px;"></i>
            <p> ios-stopwatch </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-stopwatch-outline" style="font-size: 32px;"></i>
            <p> ios-stopwatch-outline </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-timer" style="font-size: 32px;"></i>
            <p> ios-timer </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-timer-outline" style="font-size: 32px;"></i>
            <p> ios-timer-outline </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-clock" style="font-size: 32px;"></i>
            <p> ios-clock </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-clock-outline" style="font-size: 32px;"></i>
            <p> ios-clock-outline </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-time" style="font-size: 32px;"></i>
            <p> ios-time </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-time-outline" style="font-size: 32px;"></i>
            <p> ios-time-outline </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-calendar" style="font-size: 32px;"></i>
            <p> ios-calendar </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-calendar-outline" style="font-size: 32px;"></i>
            <p> ios-calendar-outline </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-photos" style="font-size: 32px;"></i>
            <p> ios-photos </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-photos-outline" style="font-size: 32px;"></i>
            <p> ios-photos-outline </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-albums" style="font-size: 32px;"></i>
            <p> ios-albums </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-albums-outline" style="font-size: 32px;"></i>
            <p> ios-albums-outline </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-camera" style="font-size: 32px;"></i>
            <p> ios-camera </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-camera-outline" style="font-size: 32px;"></i>
            <p> ios-camera-outline </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-reverse-camera" style="font-size: 32px;"></i>
            <p> ios-reverse-camera </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-reverse-camera-outline" style="font-size: 32px;"></i>
            <p> ios-reverse-camera-outline </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-eye" style="font-size: 32px;"></i>
            <p> ios-eye </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-eye-outline" style="font-size: 32px;"></i>
            <p> ios-eye-outline </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-bolt" style="font-size: 32px;"></i>
            <p> ios-bolt </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-bolt-outline" style="font-size: 32px;"></i>
            <p> ios-bolt-outline </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-color-wand" style="font-size: 32px;"></i>
            <p> ios-color-wand </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-color-wand-outline" style="font-size: 32px;"></i>
            <p> ios-color-wand-outline </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-color-filter" style="font-size: 32px;"></i>
            <p> ios-color-filter </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-color-filter-outline" style="font-size: 32px;"></i>
            <p> ios-color-filter-outline </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-grid-view" style="font-size: 32px;"></i>
            <p> ios-grid-view </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-grid-view-outline" style="font-size: 32px;"></i>
            <p> ios-grid-view-outline </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-crop-strong" style="font-size: 32px;"></i>
            <p> ios-crop-strong </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-crop" style="font-size: 32px;"></i>
            <p> ios-crop </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-barcode" style="font-size: 32px;"></i>
            <p> ios-barcode </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-barcode-outline" style="font-size: 32px;"></i>
            <p> ios-barcode-outline </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-briefcase" style="font-size: 32px;"></i>
            <p> ios-briefcase </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-briefcase-outline" style="font-size: 32px;"></i>
            <p> ios-briefcase-outline </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-medkit" style="font-size: 32px;"></i>
            <p> ios-medkit </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-medkit-outline" style="font-size: 32px;"></i>
            <p> ios-medkit-outline </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-medical" style="font-size: 32px;"></i>
            <p> ios-medical </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-medical-outline" style="font-size: 32px;"></i>
            <p> ios-medical-outline </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-infinite" style="font-size: 32px;"></i>
            <p> ios-infinite </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-infinite-outline" style="font-size: 32px;"></i>
            <p> ios-infinite-outline </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-calculator" style="font-size: 32px;"></i>
            <p> ios-calculator </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-calculator-outline" style="font-size: 32px;"></i>
            <p> ios-calculator-outline </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-keypad" style="font-size: 32px;"></i>
            <p> ios-keypad </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-keypad-outline" style="font-size: 32px;"></i>
            <p> ios-keypad-outline </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-telephone" style="font-size: 32px;"></i>
            <p> ios-telephone </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-telephone-outline" style="font-size: 32px;"></i>
            <p> ios-telephone-outline </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-drag" style="font-size: 32px;"></i>
            <p> ios-drag </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-location" style="font-size: 32px;"></i>
            <p> ios-location </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-location-outline" style="font-size: 32px;"></i>
            <p> ios-location-outline </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-navigate" style="font-size: 32px;"></i>
            <p> ios-navigate </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-navigate-outline" style="font-size: 32px;"></i>
            <p> ios-navigate-outline </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-locked" style="font-size: 32px;"></i>
            <p> ios-locked </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-locked-outline" style="font-size: 32px;"></i>
            <p> ios-locked-outline </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-unlocked" style="font-size: 32px;"></i>
            <p> ios-unlocked </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-unlocked-outline" style="font-size: 32px;"></i>
            <p> ios-unlocked-outline </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-monitor" style="font-size: 32px;"></i>
            <p> ios-monitor </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-monitor-outline" style="font-size: 32px;"></i>
            <p> ios-monitor-outline </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-printer" style="font-size: 32px;"></i>
            <p> ios-printer </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-printer-outline" style="font-size: 32px;"></i>
            <p> ios-printer-outline </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-game-controller-a" style="font-size: 32px;"></i>
            <p> ios-game-controller-a </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-game-controller-a-outline" style="font-size: 32px;"></i>
            <p> ios-game-controller-a-outline </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-game-controller-b" style="font-size: 32px;"></i>
            <p> ios-game-controller-b </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-game-controller-b-outline" style="font-size: 32px;"></i>
            <p> ios-game-controller-b-outline </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-americanfootball" style="font-size: 32px;"></i>
            <p> ios-americanfootball </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-americanfootball-outline" style="font-size: 32px;"></i>
            <p> ios-americanfootball-outline </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-baseball" style="font-size: 32px;"></i>
            <p> ios-baseball </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-baseball-outline" style="font-size: 32px;"></i>
            <p> ios-baseball-outline </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-basketball" style="font-size: 32px;"></i>
            <p> ios-basketball </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-basketball-outline" style="font-size: 32px;"></i>
            <p> ios-basketball-outline </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-tennisball" style="font-size: 32px;"></i>
            <p> ios-tennisball </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-tennisball-outline" style="font-size: 32px;"></i>
            <p> ios-tennisball-outline </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-football" style="font-size: 32px;"></i>
            <p> ios-football </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-football-outline" style="font-size: 32px;"></i>
            <p> ios-football-outline </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-body" style="font-size: 32px;"></i>
            <p> ios-body </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-body-outline" style="font-size: 32px;"></i>
            <p> ios-body-outline </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-person" style="font-size: 32px;"></i>
            <p> ios-person </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-person-outline" style="font-size: 32px;"></i>
            <p> ios-person-outline </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-personadd" style="font-size: 32px;"></i>
            <p> ios-personadd </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-personadd-outline" style="font-size: 32px;"></i>
            <p> ios-personadd-outline </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-people" style="font-size: 32px;"></i>
            <p> ios-people </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-people-outline" style="font-size: 32px;"></i>
            <p> ios-people-outline </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-musical-notes" style="font-size: 32px;"></i>
            <p> ios-musical-notes </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-musical-note" style="font-size: 32px;"></i>
            <p> ios-musical-note </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-bell" style="font-size: 32px;"></i>
            <p> ios-bell </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-bell-outline" style="font-size: 32px;"></i>
            <p> ios-bell-outline </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-mic" style="font-size: 32px;"></i>
            <p> ios-mic </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-mic-outline" style="font-size: 32px;"></i>
            <p> ios-mic-outline </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-mic-off" style="font-size: 32px;"></i>
            <p> ios-mic-off </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-volume-high" style="font-size: 32px;"></i>
            <p> ios-volume-high </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-volume-low" style="font-size: 32px;"></i>
            <p> ios-volume-low </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-play" style="font-size: 32px;"></i>
            <p> ios-play </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-play-outline" style="font-size: 32px;"></i>
            <p> ios-play-outline </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-pause" style="font-size: 32px;"></i>
            <p> ios-pause </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-pause-outline" style="font-size: 32px;"></i>
            <p> ios-pause-outline </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-recording" style="font-size: 32px;"></i>
            <p> ios-recording </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-recording-outline" style="font-size: 32px;"></i>
            <p> ios-recording-outline </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-fastforward" style="font-size: 32px;"></i>
            <p> ios-fastforward </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-fastforward-outline" style="font-size: 32px;"></i>
            <p> ios-fastforward-outline </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-rewind" style="font-size: 32px;"></i>
            <p> ios-rewind </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-rewind-outline" style="font-size: 32px;"></i>
            <p> ios-rewind-outline </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-skipbackward" style="font-size: 32px;"></i>
            <p> ios-skipbackward </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-skipbackward-outline" style="font-size: 32px;"></i>
            <p> ios-skipbackward-outline </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-skipforward" style="font-size: 32px;"></i>
            <p> ios-skipforward </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-skipforward-outline" style="font-size: 32px;"></i>
            <p> ios-skipforward-outline </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-shuffle-strong" style="font-size: 32px;"></i>
            <p> ios-shuffle-strong </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-shuffle" style="font-size: 32px;"></i>
            <p> ios-shuffle </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-videocam" style="font-size: 32px;"></i>
            <p> ios-videocam </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-videocam-outline" style="font-size: 32px;"></i>
            <p> ios-videocam-outline </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-film" style="font-size: 32px;"></i>
            <p> ios-film </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-film-outline" style="font-size: 32px;"></i>
            <p> ios-film-outline </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-flask" style="font-size: 32px;"></i>
            <p> ios-flask </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-flask-outline" style="font-size: 32px;"></i>
            <p> ios-flask-outline </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-lightbulb" style="font-size: 32px;"></i>
            <p> ios-lightbulb </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-lightbulb-outline" style="font-size: 32px;"></i>
            <p> ios-lightbulb-outline </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-wineglass" style="font-size: 32px;"></i>
            <p> ios-wineglass </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-wineglass-outline" style="font-size: 32px;"></i>
            <p> ios-wineglass-outline </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-pint" style="font-size: 32px;"></i>
            <p> ios-pint </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-pint-outline" style="font-size: 32px;"></i>
            <p> ios-pint-outline </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-nutrition" style="font-size: 32px;"></i>
            <p> ios-nutrition </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-nutrition-outline" style="font-size: 32px;"></i>
            <p> ios-nutrition-outline </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-flower" style="font-size: 32px;"></i>
            <p> ios-flower </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-flower-outline" style="font-size: 32px;"></i>
            <p> ios-flower-outline </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-rose" style="font-size: 32px;"></i>
            <p> ios-rose </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-rose-outline" style="font-size: 32px;"></i>
            <p> ios-rose-outline </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-paw" style="font-size: 32px;"></i>
            <p> ios-paw </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-paw-outline" style="font-size: 32px;"></i>
            <p> ios-paw-outline </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-flame" style="font-size: 32px;"></i>
            <p> ios-flame </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-flame-outline" style="font-size: 32px;"></i>
            <p> ios-flame-outline </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-sunny" style="font-size: 32px;"></i>
            <p> ios-sunny </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-sunny-outline" style="font-size: 32px;"></i>
            <p> ios-sunny-outline </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-partlysunny" style="font-size: 32px;"></i>
            <p> ios-partlysunny </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-partlysunny-outline" style="font-size: 32px;"></i>
            <p> ios-partlysunny-outline </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-cloudy" style="font-size: 32px;"></i>
            <p> ios-cloudy </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-cloudy-outline" style="font-size: 32px;"></i>
            <p> ios-cloudy-outline </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-rainy" style="font-size: 32px;"></i>
            <p> ios-rainy </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-rainy-outline" style="font-size: 32px;"></i>
            <p> ios-rainy-outline </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-thunderstorm" style="font-size: 32px;"></i>
            <p> ios-thunderstorm </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-thunderstorm-outline" style="font-size: 32px;"></i>
            <p> ios-thunderstorm-outline </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-snowy" style="font-size: 32px;"></i>
            <p> ios-snowy </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-moon" style="font-size: 32px;"></i>
            <p> ios-moon </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-moon-outline" style="font-size: 32px;"></i>
            <p> ios-moon-outline </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-cloudy-night" style="font-size: 32px;"></i>
            <p> ios-cloudy-night </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-ios-cloudy-night-outline" style="font-size: 32px;"></i>
            <p> ios-cloudy-night-outline </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-android-arrow-up" style="font-size: 32px;"></i>
            <p> android-arrow-up </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-android-arrow-forward" style="font-size: 32px;"></i>
            <p> android-arrow-forward </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-android-arrow-down" style="font-size: 32px;"></i>
            <p> android-arrow-down </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-android-arrow-back" style="font-size: 32px;"></i>
            <p> android-arrow-back </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-android-arrow-dropup" style="font-size: 32px;"></i>
            <p> android-arrow-dropup </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-android-arrow-dropup-circle" style="font-size: 32px;"></i>
            <p> android-arrow-dropup-circle </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-android-arrow-dropright" style="font-size: 32px;"></i>
            <p> android-arrow-dropright </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-android-arrow-dropright-circle"
                style="font-size: 32px;"></i>
            <p> android-arrow-dropright-circle </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-android-arrow-dropdown" style="font-size: 32px;"></i>
            <p> android-arrow-dropdown </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-android-arrow-dropdown-circle" style="font-size: 32px;"></i>
            <p> android-arrow-dropdown-circle </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-android-arrow-dropleft" style="font-size: 32px;"></i>
            <p> android-arrow-dropleft </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-android-arrow-dropleft-circle" style="font-size: 32px;"></i>
            <p> android-arrow-dropleft-circle </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-android-add" style="font-size: 32px;"></i>
            <p> android-add </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-android-add-circle" style="font-size: 32px;"></i>
            <p> android-add-circle </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-android-remove" style="font-size: 32px;"></i>
            <p> android-remove </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-android-remove-circle" style="font-size: 32px;"></i>
            <p> android-remove-circle </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-android-close" style="font-size: 32px;"></i>
            <p> android-close </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-android-cancel" style="font-size: 32px;"></i>
            <p> android-cancel </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-android-radio-button-off" style="font-size: 32px;"></i>
            <p> android-radio-button-off </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-android-radio-button-on" style="font-size: 32px;"></i>
            <p> android-radio-button-on </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-android-checkmark-circle" style="font-size: 32px;"></i>
            <p> android-checkmark-circle </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-android-checkbox-outline-blank"
                style="font-size: 32px;"></i>
            <p> android-checkbox-outline-blank </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-android-checkbox-outline" style="font-size: 32px;"></i>
            <p> android-checkbox-outline </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-android-checkbox-blank" style="font-size: 32px;"></i>
            <p> android-checkbox-blank </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-android-checkbox" style="font-size: 32px;"></i>
            <p> android-checkbox </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-android-done" style="font-size: 32px;"></i>
            <p> android-done </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-android-done-all" style="font-size: 32px;"></i>
            <p> android-done-all </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-android-menu" style="font-size: 32px;"></i>
            <p> android-menu </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-android-more-horizontal" style="font-size: 32px;"></i>
            <p> android-more-horizontal </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-android-more-vertical" style="font-size: 32px;"></i>
            <p> android-more-vertical </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-android-refresh" style="font-size: 32px;"></i>
            <p> android-refresh </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-android-sync" style="font-size: 32px;"></i>
            <p> android-sync </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-android-wifi" style="font-size: 32px;"></i>
            <p> android-wifi </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-android-call" style="font-size: 32px;"></i>
            <p> android-call </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-android-apps" style="font-size: 32px;"></i>
            <p> android-apps </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-android-settings" style="font-size: 32px;"></i>
            <p> android-settings </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-android-options" style="font-size: 32px;"></i>
            <p> android-options </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-android-funnel" style="font-size: 32px;"></i>
            <p> android-funnel </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-android-search" style="font-size: 32px;"></i>
            <p> android-search </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-android-home" style="font-size: 32px;"></i>
            <p> android-home </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-android-cloud-outline" style="font-size: 32px;"></i>
            <p> android-cloud-outline </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-android-cloud" style="font-size: 32px;"></i>
            <p> android-cloud </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-android-download" style="font-size: 32px;"></i>
            <p> android-download </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-android-upload" style="font-size: 32px;"></i>
            <p> android-upload </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-android-cloud-done" style="font-size: 32px;"></i>
            <p> android-cloud-done </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-android-cloud-circle" style="font-size: 32px;"></i>
            <p> android-cloud-circle </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-android-favorite-outline" style="font-size: 32px;"></i>
            <p> android-favorite-outline </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-android-favorite" style="font-size: 32px;"></i>
            <p> android-favorite </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-android-star-outline" style="font-size: 32px;"></i>
            <p> android-star-outline </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-android-star-half" style="font-size: 32px;"></i>
            <p> android-star-half </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-android-star" style="font-size: 32px;"></i>
            <p> android-star </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-android-calendar" style="font-size: 32px;"></i>
            <p> android-calendar </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-android-alarm-clock" style="font-size: 32px;"></i>
            <p> android-alarm-clock </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-android-time" style="font-size: 32px;"></i>
            <p> android-time </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-android-stopwatch" style="font-size: 32px;"></i>
            <p> android-stopwatch </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-android-watch" style="font-size: 32px;"></i>
            <p> android-watch </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-android-locate" style="font-size: 32px;"></i>
            <p> android-locate </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-android-navigate" style="font-size: 32px;"></i>
            <p> android-navigate </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-android-pin" style="font-size: 32px;"></i>
            <p> android-pin </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-android-compass" style="font-size: 32px;"></i>
            <p> android-compass </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-android-map" style="font-size: 32px;"></i>
            <p> android-map </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-android-walk" style="font-size: 32px;"></i>
            <p> android-walk </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-android-bicycle" style="font-size: 32px;"></i>
            <p> android-bicycle </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-android-car" style="font-size: 32px;"></i>
            <p> android-car </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-android-bus" style="font-size: 32px;"></i>
            <p> android-bus </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-android-subway" style="font-size: 32px;"></i>
            <p> android-subway </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-android-train" style="font-size: 32px;"></i>
            <p> android-train </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-android-boat" style="font-size: 32px;"></i>
            <p> android-boat </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-android-plane" style="font-size: 32px;"></i>
            <p> android-plane </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-android-restaurant" style="font-size: 32px;"></i>
            <p> android-restaurant </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-android-bar" style="font-size: 32px;"></i>
            <p> android-bar </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-android-cart" style="font-size: 32px;"></i>
            <p> android-cart </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-android-camera" style="font-size: 32px;"></i>
            <p> android-camera </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-android-image" style="font-size: 32px;"></i>
            <p> android-image </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-android-film" style="font-size: 32px;"></i>
            <p> android-film </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-android-color-palette" style="font-size: 32px;"></i>
            <p> android-color-palette </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-android-create" style="font-size: 32px;"></i>
            <p> android-create </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-android-mail" style="font-size: 32px;"></i>
            <p> android-mail </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-android-drafts" style="font-size: 32px;"></i>
            <p> android-drafts </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-android-send" style="font-size: 32px;"></i>
            <p> android-send </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-android-archive" style="font-size: 32px;"></i>
            <p> android-archive </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-android-delete" style="font-size: 32px;"></i>
            <p> android-delete </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-android-attach" style="font-size: 32px;"></i>
            <p> android-attach </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-android-share" style="font-size: 32px;"></i>
            <p> android-share </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-android-share-alt" style="font-size: 32px;"></i>
            <p> android-share-alt </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-android-bookmark" style="font-size: 32px;"></i>
            <p> android-bookmark </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-android-document" style="font-size: 32px;"></i>
            <p> android-document </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-android-clipboard" style="font-size: 32px;"></i>
            <p> android-clipboard </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-android-list" style="font-size: 32px;"></i>
            <p> android-list </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-android-folder-open" style="font-size: 32px;"></i>
            <p> android-folder-open </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-android-folder" style="font-size: 32px;"></i>
            <p> android-folder </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-android-print" style="font-size: 32px;"></i>
            <p> android-print </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-android-open" style="font-size: 32px;"></i>
            <p> android-open </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-android-exit" style="font-size: 32px;"></i>
            <p> android-exit </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-android-contract" style="font-size: 32px;"></i>
            <p> android-contract </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-android-expand" style="font-size: 32px;"></i>
            <p> android-expand </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-android-globe" style="font-size: 32px;"></i>
            <p> android-globe </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-android-chat" style="font-size: 32px;"></i>
            <p> android-chat </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-android-textsms" style="font-size: 32px;"></i>
            <p> android-textsms </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-android-hangout" style="font-size: 32px;"></i>
            <p> android-hangout </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-android-happy" style="font-size: 32px;"></i>
            <p> android-happy </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-android-sad" style="font-size: 32px;"></i>
            <p> android-sad </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-android-person" style="font-size: 32px;"></i>
            <p> android-person </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-android-people" style="font-size: 32px;"></i>
            <p> android-people </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-android-person-add" style="font-size: 32px;"></i>
            <p> android-person-add </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-android-contact" style="font-size: 32px;"></i>
            <p> android-contact </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-android-contacts" style="font-size: 32px;"></i>
            <p> android-contacts </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-android-playstore" style="font-size: 32px;"></i>
            <p> android-playstore </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-android-lock" style="font-size: 32px;"></i>
            <p> android-lock </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-android-unlock" style="font-size: 32px;"></i>
            <p> android-unlock </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-android-microphone" style="font-size: 32px;"></i>
            <p> android-microphone </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-android-microphone-off" style="font-size: 32px;"></i>
            <p> android-microphone-off </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-android-notifications-none" style="font-size: 32px;"></i>
            <p> android-notifications-none </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-android-notifications" style="font-size: 32px;"></i>
            <p> android-notifications </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-android-notifications-off" style="font-size: 32px;"></i>
            <p> android-notifications-off </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-android-volume-mute" style="font-size: 32px;"></i>
            <p> android-volume-mute </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-android-volume-down" style="font-size: 32px;"></i>
            <p> android-volume-down </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-android-volume-up" style="font-size: 32px;"></i>
            <p> android-volume-up </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-android-volume-off" style="font-size: 32px;"></i>
            <p> android-volume-off </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-android-hand" style="font-size: 32px;"></i>
            <p> android-hand </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-android-desktop" style="font-size: 32px;"></i>
            <p> android-desktop </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-android-laptop" style="font-size: 32px;"></i>
            <p> android-laptop </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-android-phone-portrait" style="font-size: 32px;"></i>
            <p> android-phone-portrait </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-android-phone-landscape" style="font-size: 32px;"></i>
            <p> android-phone-landscape </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-android-bulb" style="font-size: 32px;"></i>
            <p> android-bulb </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-android-sunny" style="font-size: 32px;"></i>
            <p> android-sunny </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-android-alert" style="font-size: 32px;"></i>
            <p> android-alert </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-android-warning" style="font-size: 32px;"></i>
            <p> android-warning </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-social-twitter" style="font-size: 32px;"></i>
            <p> social-twitter </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-social-twitter-outline" style="font-size: 32px;"></i>
            <p> social-twitter-outline </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-social-facebook" style="font-size: 32px;"></i>
            <p> social-facebook </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-social-facebook-outline" style="font-size: 32px;"></i>
            <p> social-facebook-outline </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-social-googleplus" style="font-size: 32px;"></i>
            <p> social-googleplus </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-social-googleplus-outline" style="font-size: 32px;"></i>
            <p> social-googleplus-outline </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-social-google" style="font-size: 32px;"></i>
            <p> social-google </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-social-google-outline" style="font-size: 32px;"></i>
            <p> social-google-outline </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-social-dribbble" style="font-size: 32px;"></i>
            <p> social-dribbble </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-social-dribbble-outline" style="font-size: 32px;"></i>
            <p> social-dribbble-outline </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-social-octocat" style="font-size: 32px;"></i>
            <p> social-octocat </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-social-github" style="font-size: 32px;"></i>
            <p> social-github </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-social-github-outline" style="font-size: 32px;"></i>
            <p> social-github-outline </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-social-instagram" style="font-size: 32px;"></i>
            <p> social-instagram </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-social-instagram-outline" style="font-size: 32px;"></i>
            <p> social-instagram-outline </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-social-whatsapp" style="font-size: 32px;"></i>
            <p> social-whatsapp </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-social-whatsapp-outline" style="font-size: 32px;"></i>
            <p> social-whatsapp-outline </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-social-snapchat" style="font-size: 32px;"></i>
            <p> social-snapchat </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-social-snapchat-outline" style="font-size: 32px;"></i>
            <p> social-snapchat-outline </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-social-foursquare" style="font-size: 32px;"></i>
            <p> social-foursquare </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-social-foursquare-outline" style="font-size: 32px;"></i>
            <p> social-foursquare-outline </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-social-pinterest" style="font-size: 32px;"></i>
            <p> social-pinterest </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-social-pinterest-outline" style="font-size: 32px;"></i>
            <p> social-pinterest-outline </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-social-rss" style="font-size: 32px;"></i>
            <p> social-rss </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-social-rss-outline" style="font-size: 32px;"></i>
            <p> social-rss-outline </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-social-tumblr" style="font-size: 32px;"></i>
            <p> social-tumblr </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-social-tumblr-outline" style="font-size: 32px;"></i>
            <p> social-tumblr-outline </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-social-wordpress" style="font-size: 32px;"></i>
            <p> social-wordpress </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-social-wordpress-outline" style="font-size: 32px;"></i>
            <p> social-wordpress-outline </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-social-reddit" style="font-size: 32px;"></i>
            <p> social-reddit </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-social-reddit-outline" style="font-size: 32px;"></i>
            <p> social-reddit-outline </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-social-hackernews" style="font-size: 32px;"></i>
            <p> social-hackernews </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-social-hackernews-outline" style="font-size: 32px;"></i>
            <p> social-hackernews-outline </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-social-designernews" style="font-size: 32px;"></i>
            <p> social-designernews </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-social-designernews-outline" style="font-size: 32px;"></i>
            <p> social-designernews-outline </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-social-yahoo" style="font-size: 32px;"></i>
            <p> social-yahoo </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-social-yahoo-outline" style="font-size: 32px;"></i>
            <p> social-yahoo-outline </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-social-buffer" style="font-size: 32px;"></i>
            <p> social-buffer </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-social-buffer-outline" style="font-size: 32px;"></i>
            <p> social-buffer-outline </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-social-skype" style="font-size: 32px;"></i>
            <p> social-skype </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-social-skype-outline" style="font-size: 32px;"></i>
            <p> social-skype-outline </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-social-linkedin" style="font-size: 32px;"></i>
            <p> social-linkedin </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-social-linkedin-outline" style="font-size: 32px;"></i>
            <p> social-linkedin-outline </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-social-vimeo" style="font-size: 32px;"></i>
            <p> social-vimeo </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-social-vimeo-outline" style="font-size: 32px;"></i>
            <p> social-vimeo-outline </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-social-twitch" style="font-size: 32px;"></i>
            <p> social-twitch </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-social-twitch-outline" style="font-size: 32px;"></i>
            <p> social-twitch-outline </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-social-youtube" style="font-size: 32px;"></i>
            <p> social-youtube </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-social-youtube-outline" style="font-size: 32px;"></i>
            <p> social-youtube-outline </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-social-dropbox" style="font-size: 32px;"></i>
            <p> social-dropbox </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-social-dropbox-outline" style="font-size: 32px;"></i>
            <p> social-dropbox-outline </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-social-apple" style="font-size: 32px;"></i>
            <p> social-apple </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-social-apple-outline" style="font-size: 32px;"></i>
            <p> social-apple-outline </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-social-android" style="font-size: 32px;"></i>
            <p> social-android </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-social-android-outline" style="font-size: 32px;"></i>
            <p> social-android-outline </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-social-windows" style="font-size: 32px;"></i>
            <p> social-windows </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-social-windows-outline" style="font-size: 32px;"></i>
            <p> social-windows-outline </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-social-html5" style="font-size: 32px;"></i>
            <p> social-html5 </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-social-html5-outline" style="font-size: 32px;"></i>
            <p> social-html5-outline </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-social-css3" style="font-size: 32px;"></i>
            <p> social-css3 </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-social-css3-outline" style="font-size: 32px;"></i>
            <p> social-css3-outline </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-social-javascript" style="font-size: 32px;"></i>
            <p> social-javascript </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-social-javascript-outline" style="font-size: 32px;"></i>
            <p> social-javascript-outline </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-social-angular" style="font-size: 32px;"></i>
            <p> social-angular </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-social-angular-outline" style="font-size: 32px;"></i>
            <p> social-angular-outline </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-social-nodejs" style="font-size: 32px;"></i>
            <p> social-nodejs </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-social-sass" style="font-size: 32px;"></i>
            <p> social-sass </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-social-python" style="font-size: 32px;"></i>
            <p> social-python </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-social-chrome" style="font-size: 32px;"></i>
            <p> social-chrome </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-social-chrome-outline" style="font-size: 32px;"></i>
            <p> social-chrome-outline </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-social-codepen" style="font-size: 32px;"></i>
            <p> social-codepen </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-social-codepen-outline" style="font-size: 32px;"></i>
            <p> social-codepen-outline </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-social-markdown" style="font-size: 32px;"></i>
            <p> social-markdown </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-social-tux" style="font-size: 32px;"></i>
            <p> social-tux </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-social-freebsd-devil" style="font-size: 32px;"></i>
            <p> social-freebsd-devil </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-social-usd" style="font-size: 32px;"></i>
            <p> social-usd </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-social-usd-outline" style="font-size: 32px;"></i>
            <p> social-usd-outline </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-social-bitcoin" style="font-size: 32px;"></i>
            <p> social-bitcoin </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-social-bitcoin-outline" style="font-size: 32px;"></i>
            <p> social-bitcoin-outline </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-social-yen" style="font-size: 32px;"></i>
            <p> social-yen </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-social-yen-outline" style="font-size: 32px;"></i>
            <p> social-yen-outline </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-social-euro" style="font-size: 32px;"></i>
            <p> social-euro </p>
        </div>
        <div class="icons-item">
            <i class="zvu-icon zvu-icon-social-euro-outline" style="font-size: 32px;"></i>
            <p> social-euro-outline </p>
        </div>
    </div>
  </z-card>
</div>
</template>

<script>
export default {
  name: 'cpIcon',
  data: function () {
    return {}
  },
  methods: {
  }
}
</script>
<style scoped>
.icons-box{
    clear: both;
    display: table;
  }
.icons-item {
    float: left;
    margin: 6px 6px 6px 0;
    width: 145px;
    text-align: center;
    list-style: none;
    cursor: pointer;
    height: 100px;
    color: #5c6b77;
    transition: all .2s ease;
    position: relative;
    padding-top: 10px;
}
</style>
